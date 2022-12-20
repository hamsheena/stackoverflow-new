import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import profile from '../../assets/profile_image.jpeg'
//import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"
import './CreatePost.css'
import {askPost} from '../../actions/post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFilm,faPhotoVideo } from '@fortawesome/free-solid-svg-icons'

const CreatePost = () => {

  const [ postTitle, setPostTitle ] = useState('')
   const [ postPic, setPostPic ] = useState(null);
   const [ postVid, setPostVid ] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()
    const [state, setState] = useState(false);
    const [vidstate, setvidState] = useState(false);



    const handleSubmit = (e) => {
      e.preventDefault()
       if(!postTitle){
        alert("Post must have a title");
       }
     dispatch(askPost({ postTitle, postPic,postVideo:postVid, userPosted: User.result.name,userPic : User.result.pic }, navigate))
        
    }

  const postDetails = (pics) => {
    //setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg" ) {
        setState(true)
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "elnabja2");
      data.append("cloud_name", "dalywq6w3");
      fetch("https://api.cloudinary.com/v1_1/dalywq6w3/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPostPic(data.url.toString());
        
          setImagePreview(URL.createObjectURL(pics));
          
          console.log(postPic);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please Select an image");
    }
  };

  const postVideo = (pics) => {
    //setPicMessage(null);
    if ( pics.type === "video/mp4" || pics.type === "video/x-m4v"  || pics.type === "video/*") {
        setvidState(true)
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "elnabja2");
      
      fetch("https://api.cloudinary.com/v1_1/dalywq6w3/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPostVid(data.url.toString());
          console.log(postVid)
         
          setVideoPreview(URL.createObjectURL(pics));
          
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please Select a video");
    }
  };

// <PermMedia htmlColor='tomato' className='shareIcon'/>
  return (
    <div className='share'>
    <div className="shareWrapper">
      <form onSubmit={handleSubmit}>
      <div className="shareTop">
          <img className='shareProfileImg' src={profile} alt="" />
          <input placeholder="What's in your mind?" className='shareInput'  onChange={(e) => {setPostTitle(e.target.value)}}/>
          
      </div>
      <div  >
          <img src={imagePreview} className={ state === true ? 'upload-pic'  : 'nav-men' } />
          
          <iframe
          className={ vidstate === true ? 'upload-vid'  : 'nav-vid' }
      width="560"
      height="315"
      src={videoPreview}
      title="Cloudinary"
      frameborder="0"
      allowFullScreen
    />
    </div>
      <hr className='shareHr'/>
      <div className="shareBottom" >
          <div className="shareOptions" >
              <div className="shareOption">
                  
                  <div className='signup-profile-pic_container' >
                           
                            <label htmlFor='image-upload' className='image-upload-label'>
                           
                            <span className='shareOptionText' ><FontAwesomeIcon icon={faPhotoFilm} /> Photo</span>
                            </label>
                            <input type="file" id='image-upload' hidden accept="image/png, image/jpeg"  onChange={(e) => postDetails(e.target.files[0])} />
                            </div>
                 

              </div>
              
          </div>

          <div className="shareOptions" >
              <div className="shareOption">
                  
                  <div className='signup-profile-pic_container' >
                           
                            <label htmlFor='vid-upload' className='image-upload-label'>
                           
                            <span className='shareOptionText' ><FontAwesomeIcon icon={faPhotoVideo} /> Video</span>
                            </label>
                            <input type="file" id="vid-upload" hidden accept="video/mp4,video/x-m4v,video/*"  onChange={(e) => postVideo(e.target.files[0])} />
                            </div>
                 

              </div>
              
          </div>
         
          <input type="submit" value='Share' className='shareButton'/>
          
      </div>
      </form>
    </div>
  </div>
  )
}

export default CreatePost