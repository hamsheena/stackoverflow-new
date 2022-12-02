import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import PostHome from './Pages/Posts/PostHome'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import CreatePost from './Pages/CreatePost/CreatePost'
import Comments from './Pages/CreatePost/CommentDetails'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Auth' element={<Auth />}/>
        <Route path='/Questions' element={<Questions />}/>
        <Route path='/Posts' element={<PostHome />}/>
        <Route path='/AskQuestion' element={<AskQuestion />}/>
        <Route path='/Questions/:id' element={<DisplayQuestion />}/>
        <Route path='/Tags' element={<Tags />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Users/:id' element={<UserProfile />} />
        <Route path='/CreatePost' element={<CreatePost />}/>  
        <Route path='/Comments/:id' element={<Comments />}/>
    </Routes>
  )
}

export default AllRoutes