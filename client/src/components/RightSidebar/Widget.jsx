import React from 'react'
import './RightSidebar.css'
import Pen from '../../assets/pen.jpg'
import Comment from '../../assets/comment.jpg'
import Blackicon from '../../assets/blackicon.png'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={Pen} alt="p" width="18"/>
        <p>Observability is the key to the future of software(and your DevOps career)</p>
      </div>
      <div className='right-sidebar-div-2'>
        <img src={Pen} alt="p" width="18"/>
        <p>Podcast 374:How valuable is your screen name?</p>
      </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={Comment} alt="p" width="18"/>
        <p>Staging Ground Workflow: Canned Comments</p>
      </div>
      <div className='right-sidebar-div-2'>
        <img src={Comment} alt="p" width="18"/>
        <p>Should we burninate the [collapse] tag?</p>
      </div>
      <div className='right-sidebar-div-2'>
        <img src={Blackicon} alt="p" width="18"/>
        <p>The Ask Wizard (2022) has graduated</p>
      </div>
      </div>

      <h4>Hot Meta posts</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
       <p>34</p>
        <p>Why was this spam flag declined?</p>
      </div>
      <div className='right-sidebar-div-2'>
        <p>23</p>
        <p>what is the best course of action when a user has high enough ref?</p>
      </div>
      <div className='right-sidebar-div-2'>
       <p>10</p>
        <p>Is a link to how to ask page useful?</p>
      </div>
      </div>
    </div>
  )
}

export default Widget