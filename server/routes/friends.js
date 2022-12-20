import express from 'express'
import { friendUser } from '../controllers/friends.js'

import auth from '../middlewares/auth.js'

const router = express.Router();
//router.route(`/follow/:id`).get(isAuthenticated, followUser)
router.patch('/follow/:id',auth,friendUser)
export default router