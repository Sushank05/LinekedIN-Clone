import React from 'react'
import {Avatar} from     "@material-ui/core"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./css/Post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
function Post({name,description,message,photoURL}) {
  return (
    <div className='post'>
        <div className='post__header'>
<div  className='post__headerleft'>
<Avatar src={photoURL}/>
<div className='post__profiledetails'>
    <h3>{name}</h3>
    <p>{description}</p>
</div>
</div>
<MoreHorizIcon/>
</div>


 <div className='post__body'>
<p>{message}</p>
</div>       
        
  <div className='post__footer'>
<div className='post__footeroptions'>
<ThumbUpIcon/>
<span>Like</span>
<CommentIcon/>
<span>Comment</span>
<ShareIcon/>
<span>Share</span>
<SendIcon/>
<span>Send</span>




</div>
  </div>      
        
        
        
        
        </div>
  )
}

export default Post