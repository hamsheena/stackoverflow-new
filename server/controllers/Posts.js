import Posts from '../models/Posts.js'
import mongoose from 'mongoose'

export const AskPost = async (req, res) => {
    const postPostData = req.body;
    const userId = req.userId;
    const postPost = new Posts({ ...postPostData, userId});
    try {
        await postPost.save();
        res.status(200).json("Posted created successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post!!Post Failed")        
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const postList = await Posts.find();
        res.status(200).json(postList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 
/*
export const deleteQuestion = async (req, res) => {
    const { id:_id } = req.params ;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }

    try {
        await Questions.findByIdAndRemove( _id );
        res.status(200).json({ message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}*/

export const votePost = async (req, res) => {
    const { id: _id } = req.params;
    const { value } = req.body;
    const userId = req.userId;
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('post unavailable...');
    }

    try {
        const post = await Posts.findById(_id)
        const upIndex = post.likes.findIndex((id) => id === String(userId))
        

        if(value === 'likes'){
            if(upIndex === -1){
               
                post.likes.push(userId)
            }else{
                
                post.likes = post.likes.filter((id) => id !== String(userId))
            }
        }
        
        await Posts.findByIdAndUpdate( _id, post )
        res.status(200).json({ message: "liked successfully..."})
    } catch (error) {
        res.status(404).json({ message: "id not found"})
    }
}