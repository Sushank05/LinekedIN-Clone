import React from 'react'
import "./css/Sidebar.css"
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
const user = useSelector(selectUser);

  return (
    <div className='sidebar'>
     <div className='sidebar__profile'> 
        
     <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/work-zoom-background-design-template-e53bfea393de7a73be272cc24c49ed23_screen.jpg?ts=1587229445'/>
     <Avatar src={user.photoURL}/>
     <div className='profile__details'>
            <h4>{user.displayName}</h4>
             <p>Software Engineer</p>
     </div>
     <div className='profile__stats'>
       <span>Who viewed your profile<br/></span>
       <span className='stat__number'>160</span>

     </div>
     <div className='profile__stats'>
       <span>Connectons  <br/><b>Grow Your Connections </b></span>
       <span className='stat__number'>500+</span>

     </div>
     </div>  
     <div className='sidebar__recent'>
     <p>Recent</p>
     <p className='hash'><span>#</span>Web D</p>
     <p className='hash'><span>#</span>Machine Learning</p>
     <p className='hash'><span>#</span>SDE 1</p>
     <p className='hash'><span>#</span>Redux</p>
     <p className='hash'><span>#</span>SDE Intern</p>


     </div> 
    </div>
  )
}

export default Sidebar

