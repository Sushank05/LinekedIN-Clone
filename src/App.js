 import React, { useEffect } from 'react';
 import Header from './Header.js';
import Feed from './Feed.js';

import Sidebar from './sidebar.js';
import Widget from './Widget.js';
import Login from './Login.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginuser, logoutuser, selectUser } from './features/userSlice.js';
import { auth } from './Firebase.js';
function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){ //login
       dispatch(loginuser({
        email:userAuth.email,
        uid: userAuth.uid,
        displayName:userAuth.displayName,
      photoURL: userAuth.photoURL
       }))}
       else {  //logout
        dispatch(logoutuser());
       }
      
    })
  },[])
  return (
    <>
    {
      !user ? (<Login/>) : (<div className='app__wrapper'>
      <Header/>
      <div  className='app__body'> 
          <Sidebar/>
          <Feed/> 
          <Widget/>
       </div>
      </div>)
    }
    
   </> 
  );
}

export default App;
