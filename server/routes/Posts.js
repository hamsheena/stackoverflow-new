import express from 'express'

import { AskPost, getAllPosts,votePost } from '../controllers/Posts.js' 
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/Ask', auth, AskPost)
router.get('/get', getAllPosts)
//router.delete('/delete/:id', auth, deleteQuestion );
router.patch('/vote/:id',auth, votePost);

export default router