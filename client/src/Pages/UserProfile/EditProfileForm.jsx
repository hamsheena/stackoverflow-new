import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../actions/users'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const EditProfileForm = ({ currentUser, setSwitch }) => {

    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [pic, setPic] = useState(currentUser?.result?.pic)
    const [tags, setTags] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(tags.length === 0){
            dispatch(updateProfile( currentUser?.result?._id, { name, about,pic, tags: currentUser?.result?.tags }))
        } else{
            dispatch(updateProfile( currentUser?.result?._id, { name, about,pic, tags }))
        }
        setSwitch(false)
    }

    const postDetails = (pics) => {
        //setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            
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
              setPic(data.url.toString());
             // setImagePreview(URL.createObjectURL(pics));
              
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("Please Select an Image");
        }
      };

    return (
        <div>
            <h1 className='edit-profile-title'>
                Edit Your Profile
            </h1>
            <h2 className="edit-profile-title-2">
                Public information
            </h2>
            <form className="edit-profile-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <h3>Display name</h3>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="about">
                    <h3>About me</h3>
                    <textarea id="about" cols="30" rows="10" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                </label>
                <label htmlFor="tags">
                    <h3>Watched tags</h3>
                    <p>Add tags separated by 1 space</p>
                    <input type="text" id='tags' onChange={(e) => setTags(e.target.value.split(' '))}/>
                </label>
                <h3>Profile picture</h3>
                <div className='signup-profile-pic_container'>
                            <img src={pic} className='signup-profile-pic' />
                            <label htmlFor='image-upload' className='image-upload-label'>
                            <FontAwesomeIcon icon={faCirclePlus} className="add-picture-icon" />
                            </label>
                            <input type="file" id="image-upload" hidden accept="image/png, image/jpeg"  onChange={(e) => postDetails(e.target.files[0])} />
                            </div>
                <br />
                <input type="submit" value='Save profile' className='user-submit-btn'/>
                <button type='button' className='user-cancel-btn' onClick={() => setSwitch(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditProfileForm