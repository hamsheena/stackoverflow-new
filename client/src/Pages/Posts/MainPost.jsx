import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
//import { useSelector} from 'react-redux'
import './MainPost.css'
import PostsList from './PostsList'
import { setCurrentUser } from '../../actions/currentUser'
import { useSelector, useDispatch } from 'react-redux'

const MainPost = () => {

 

    const location = useLocation()
    var user = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const postsList = useSelector(state => state.postsReducer)
    // console.log(questionsList)
    /*
    var postsList = [{ 
        _id: 1,
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
        _id: 2,
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
        _id: 3,
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
    }]*/

    const checkAuth = () => {
        if(user === null){
            alert("login or signup to create a post")
            navigate('/Auth')
        }else{
            navigate('/CreatePost')
        }
    }

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1>All Posts</h1> : <h1>Posts for you</h1>
                }
                <button onClick={checkAuth} className='ask-btn'>Create Post</button>
            </div>
            <div>
                {
                    postsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{ postsList.data.length } posts</p>
                        <PostsList postsList={postsList.data} />
                    </>
                }
            </div>
        </div>
    )
}

export default MainPost