import express from "express"

import { postComment } from '../controllers/Comments.js'
import auth from '../middlewares/auth.js'

const router = express.Router();

router.patch('/post/:id', auth, postComment)
//router.patch('/delete/:id', auth, deleteAnswer)

export default router