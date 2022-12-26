import React, {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import moment from 'moment'

import DisplayComment from './DisplayComment'
import profile from '../../assets/profile_image.jpeg'
import likeimg from '../../assets/like.png'
import './Comments.css'
import {postComment} from '../../actions/post.js'
import {votePost} from '../../actions/post.js'
import '../Posts/frame.css'

const Comments = () => {
    const { id } = useParams()
    var User = useSelector((state) => (state.currentUserReducer))
    
    const postsList = useSelector(state => state.postsReducer)

    const location = useLocation()
    const url = 'https://stackoverflow-hamsheena.netlify.app'

  const handleShare = () => {
    copy(url+location.pathname)
    alert('Copied url : '+url+location.pathname)
}

/*
    var postsList = [{ 
        _id: '1',
        likes: 3, 
        noOfComments: 2,
        postTitle: "What is a function?",
        PostImage:"../../assets/profile_image.jpeg",
        postBody: "It meant to be",
        postTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "mano",
        userId: 1,
        postedOn: "jan 1",
        comment: [{
            commentBody: "Answer",
            userCommented: 'kumar',
            commentedOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: '2',
        likes: 3, 
        noOfComments: 2,
        postTitle: "What is a post?",
        PostImage:"../../assets/profile_image.jpeg",
        postBody: "It meant to be",
        postTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "mano",
        userId: 1,
        postedOn: "jan 1",
        comment: [{
            commentBody: "Answer",
            userCommented: 'hamshi',
            commentedOn: "feb 5",
            userId: 2,
        }]
    },{ 
        _id: '3',
        likes: 9, 
        noOfComments: 5,
        postTitle: "What is a function?",
        PostImage:"../../assets/profile_image.jpeg",
        postBody: "It meant to be",
        postTags: [ "react js", "mongo db", "express js"],
        userPosted: "mano",
        userId: 1,
        postedOn: "jan 1",
        comment: [{
            commentBody: "Answer",
            userCommented: 'kumar',
            commentedOn: "jan 2",
            userId: 2,
        }]
    }]

   */

    const [Comment, setComment] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    
    
  
    const handleUpVote = () => {
      dispatch(votePost(id, 'likes'))
  }

    const handlePostAns = (e, commentLength) =>{
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to comment')
            Navigate('/Auth')
        }else{
            if(Comment === ''){
                alert('Enter an comment before submitting')
            } else{
                dispatch(postComment({ id, noOfComments: commentLength + 1, commentBody: Comment, userCommented: User.result.name, userImage: User.result.pic }))
                alert('Comment posted')
            }

        }
    }
  return (
    <div className='question-details-page'>
    {
        postsList.data === null ?
        <h1>Loading...</h1> :
        <>
            {
                postsList.data.filter(post => post._id === id).map(post => (
                    <div key={post._id}>
                        
                        <div className='pos'>
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
             className='iframe-class2'
      src={post.postVideo}
      title="Cloudinary"
      frameborder="0"
      allowFullScreen
    />
          } 
        </div>
        <div className="postBottom">

          <div className="postBottomLeft">
            <img className='likeIcon' src={likeimg} alt=""  onClick={handleUpVote} />

            <span className="postLikeCounter">{post.likes.length} people like it</span>
          </div>
          <div className="postBottomLeft">
            <div className="question-actions-user">
          <button type='button' onClick={handleShare}>Share</button>
          </div>
          </div>
          
          <div className="postBottomRight">
            <span className="postCommenttext">{post.noOfComments} comments</span>
          </div>
        </div>
      </div>
    </div>
                        
                        <section className='post-ans-container'>
                            <h3>Your Comment</h3>
                            <form  onSubmit={ (e) => { handlePostAns(e, post.comment.length) }}>
                                <textarea name="" id="" cols="60" rows="3" onChange={e => setComment(e.target.value)} ></textarea><br />
                                <input type="Submit" className='post-ans-btn' value='Post Your Comment'/>
                            </form>
                           
                        </section>
                        {
                            post.noOfComments !== 0 && (
                                <section>
                                    <h3>{post.noOfComments} Comments</h3>
                                    <DisplayComment key={post._id} post={post} />
                                </section>
                            )
                        }
                    </div>
                ))
            }
        </>
    }
</div>
  )
}

export default Comments