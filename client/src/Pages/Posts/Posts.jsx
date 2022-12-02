import React, {useState} from 'react'
import likeimg from '../../assets/like.png'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
import './frame.css'


/*src={Users.filter((u) => u.id === post.userId)[0].profilePicture} 
<span className="postUsername">
                  {Users.filter((u) => u.id === post.userId)[0].username}
                  </span>*/

 
  
const Posts = ({post}) => {

   /* const [like, setLike] = useState(post.likes)
  const [isliked, setIsLiked] = useState(false)

  const likeHandler =()=> {
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)

  
  }*/
 
 

    return (
     
        <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg'
                 src={post.userPic} 
                alt="" /> 
                
                <span className="postUsername">
                  {post.userPosted}
                  </span>
                <span className="postDate">{moment(post.postedOn).fromNow()}</span>
            </div>

           
        
        </div>
        <div className="postCenter">
          <span className="postText">{post.postBody}</span>
          { post.postVideo === null ?
             <img className='postImg' src={post.postPic} alt="" /> 
             :
             <iframe
   className='iframe-class'
      src={post.postVideo}
      title="Cloudinary"
      frameborder="0"
      allowFullScreen
    />
          } 
        </div>
        <div className="postBottom">

          
          <div className="postBottomRight">
            <span className="postCommenttext">{post.noOfComments} 
             <Link to={`/Comments/${post._id}`} className='question-title-link'> comments</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Posts