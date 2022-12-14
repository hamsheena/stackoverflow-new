import express  from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import postRoutes from './routes/Posts.js'
import commentRoutes from './routes/Comments.js'
import friendRoutes from './routes/friends.js'

const app = express();
dotenv.config();
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({limit:'30mb',extended:true}))
app.use(cors());



app.get('/',(req,res) => {
    res.send("this is a stack overflow clone API")
})

app.use('/user',userRoutes)
app.use('/question',questionRoutes)
app.use('/answer',answerRoutes)
app.use('/posts', postRoutes)
app.use('/comment', commentRoutes)
app.use('/friend', friendRoutes)

const PORT= process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL


mongoose.connect(DATABASE_URL, {useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(PORT,() => {console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))

