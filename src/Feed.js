import React, { useEffect, useState } from 'react'
import {Avatar} from "@material-ui/core"
import "./css/Feed.css"
import AssignmentIcon from '@mui/icons-material/Assignment';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Post from './Post';
import {db} from "./Firebase.js"
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Feed() {
    const user=useSelector(selectUser);
   const[posts,setPost]= useState([]);
    const [input,setInput] = useState();
const submitPost=(e)=>{
    e.preventDefault();
    db.collection("posts").add({
        name:user.displayName,
        description:"Test Post",
        message:input,
        photoURL:user.photoURL,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    }); 
    setInput(""); 
}
useEffect(()=>{
db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
setPost(snapshot.docs.map(doc=>({
    id:doc.id,data:doc.data()
})))
}
    )

},[])
  return (
    <div className='feed'>
    
<div className='feed__input'>

<div className='feed__form'>
<Avatar src={user.photoURL}/>
       <form onSubmit={submitPost}>
        <input type='text' placeholder='Start a Post' value={input} onChange={e=>setInput(e.target.value)}/>
       <input type='submit'/>

       </form>
        
      </div>
       <div className='feed__options '>
        <div className='options'>
            <InsertPhotoIcon style={{color:'#70b5f9'}}/>  
            <span>Photo</span>
        </div>
        <div className='options'>
            <YouTubeIcon style={{color:'#7fc15e'}}/>  
            <span>Video</span>
        </div>
        <div className='options'>
            <CalendarMonthIcon style={{color:'#e7a33e'}}/>  
            <span>Event</span>
        </div>
        <div className='options'>
            <AssignmentIcon style={{color:'#fc9295'}}/>  
            <span>Write Article</span>
        </div>
       </div>
       </div>
       {
        posts.map(({id,data:{name,description,message,photoURL}})=>{
            return   <Post key={id} name={name} description={description} message={message} photoURL={photoURL} />
        })
       }
     
       
    </div>
  )
}

export default Feed