import React,{useState}from 'react'
import { useDispatch } from 'react-redux';
import "./css/Login.css"
import {auth} from "./Firebase";
import {loginuser} from './features/userSlice';
function Login() {
  const [signup,setSignUp]= useState(false);
  const [name,setName]= useState("");
  const [photoURL,setPhotoURL]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState(""); 
  const dispatch = useDispatch(); 
  const register=(e)=>{
    e.preventDefault();
    if(!name){
      return alert(" name is required!");
    }
    if(!photoURL){
      return alert("photoURL is required!");
    }
    if(!email){
      return alert("email is required!");
    }
    if(!password){
      return alert("password is required!");}
      
     auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL: photoURL
      }).then(()=>{
        dispatch(loginuser({
          email:userAuth.user.email,
          uid: userAuth.user.uid,
          displayName:name,
        photoURL: photoURL

        }))
      })
     }).catch(error=>alert(error));

      setPhotoURL("");
      setName("");
      setEmail("");
      setPassword("");
       
  } 

  const signIn=(e)=>{
    e.preventDefault();
    if(!email){
      return alert("email is required!");
    }
    if(!password){
      return alert("password is required!");
    }
    auth.signInWithEmailAndPassword(email,password).then(({user})=>{
    dispatch(loginuser({
      email:user.email,
      uid: user.uid,
      displayName:user.displayName,
    photoURL: user.photoURL

    }))
  }).catch(error=>alert(error))}

  return (<>
    <div className='loginScreen'>
    <img src="https://www.seekpng.com/png/detail/19-195872_linkedin-free-png-image-linkedin.png" alt="Linkedin Free Png Image - Linkedin@seekpng.com"/>
 {
  signup===true? 
  (<form onSubmit={register}>
<input type='text'
    placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/>
    <input type='text'
    placeholder='Profile Picture Url' value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>
    <input type='email'
    placeholder='Email'  value={email} onChange={e=>setEmail(e.target.value)}/>
    <input type='password'
    placeholder='Password'   value={password}  onChange={e=>setPassword(e.target.value)}/>

    <input type='submit'
    placeholder='Sign Up'/>
    <h4>Already a member? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
  </form>)


:

 ( <form onSubmit={signIn}>
  <input type='email'
    placeholder='Email'  value={email} onChange={e=>setEmail(e.target.value)}/>
    <input type='password'
    placeholder='Password'   value={password}  onChange={e=>setPassword(e.target.value)}/>
    

    <input type='submit'
    placeholder='Sign In'/>
    <h4>Not a member? <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
  </form>)
  }
  
    </div>
    </>
  )
}

export default Login