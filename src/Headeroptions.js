import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from "firebase"

function Headeroptions({Icon,title,avatar}) {
  const user = useSelector(selectUser);
  return (
    <div className='Header__options'>
    { Icon &&<Icon></Icon> }
    { avatar && <Avatar name={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>}
       <span>{title}</span>
    </div>
  )
}

export default Headeroptions