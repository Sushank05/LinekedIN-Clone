import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./css/Widget.css"
function Widget() {
  return (
    <div className='widget'>
     <div className='widget__top'>
        <div className='widget__header'>
          <h4>LinkedIn News</h4>
  <InfoIcon/>
        </div>
        <div className='widget__body'>
          <ul className='widget__options'>
  <li>
    <h4>Slaying Job Search Fee</h4>
    <p>6d ago *4,55 readers</p>
  </li>
  <li>
    <h4>A two pizza rule for cutting</h4>
    <p>2d ago *6,12 readers</p>
  </li>
  <li>
    <h4>How to handle a workplace breakup</h4>
    <p>3d ago *4,45 readers</p>
  </li>
  <li>
    <h4>Flexi leave is new flexi</h4>
    <p>4d ago *3,55 readers</p>
  </li>
  <li>
    <h4>Shoter hour boost productivity</h4>
    <p>1d ago *4,55 readers</p>
  </li>
          </ul>
        </div>
     </div>










     <div className='widget__bottom'>
        <div className='widget__header'>
          <h4>Today Top Courses</h4>
  <InfoIcon/>
        </div>
        <div className='widget__body'>
          <ul className='widget__options'>
  <li>
    <h4>Leading with heavy heat</h4>
    <p>Kay Cole</p>
  </li>
  <li>
    <h4>Building Resiliance</h4>
    <p>Tatianan Kaolovou</p>
  </li>
  <li>
    <h4>Critical Thinking </h4>
    <p>3d ago *4,45 readers</p>
  </li>
  <li>
    <h4>Flexi leave is new flexi</h4>
    <p>4d ago *3,55 readers</p>
  </li>
  <li>
    <h4>Shoter hour boost productivity</h4>
    <p>1d ago *4,55 readers</p>
  </li>
          </ul>
        </div>
     </div>





    </div>
  )
}

export default Widget