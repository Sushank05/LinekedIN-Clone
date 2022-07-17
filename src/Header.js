import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/Header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from "@material-ui/core"
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function Header() {
  const user=useSelector(selectUser);
  return (
    <div className='header'>
    <div className='header__left'>
    <div className='header__logo'>
  <img src='https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1655912115~hmac=fb1b591fe8f0cdb67489863696136abb'></img>
  </div>
  <div className='header__search'>
  <SearchIcon/>  
  <input type='text' placeholder="search"/> 
   </div>
    </div>
    
    <div className='header__right'>
       <Headeroptions Icon={HomeIcon}  title="Home" />
       <Headeroptions Icon={PeopleIcon}  title="Network"/>
       <Headeroptions Icon={BusinessCenterIcon}  title="Jobs" />
       <Headeroptions Icon={MessageIcon}  title="Messaging" />
       <Headeroptions Icon={NotificationsIcon}  title="Notification" />
       <Headeroptions avatar={Avatar}  title={user.displayName} />
    </div>
    
    
    </div>
  )
}

export default Header
