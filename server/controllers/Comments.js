import mongoose from 'mongoose'
import Posts from '../models/Posts.js'

export const postComment = async(req, res) => {
    const { id: _id } = req.params;
    const { noOfComments, commentBody, userCommented,userImage } = req.body;
    const userId = req.userId;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('post unavailable...');
    }
    
    updateNoOfPosts(_id, noOfComments)
    try {
        const updatedPost = await Posts.findByIdAndUpdate( _id, { $addToSet: {'comment': [{ commentBody, userCommented,userImage, userId }]}})
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(400).json('error in updating')
    }
}

const updateNoOfPosts = async (_id, noOfComments) => {
    try {
        await Posts.findByIdAndUpdate( _id, { $set: { 'noOfComments' : noOfComments}})
    } catch (error) {
        console.log(error)
    }
}

/*export const deleteComment = async ( req, res ) => {
    const { id:_id } = req.params;
    const { commentId, noOfComments } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Post unavailable...');
    }
    if(!mongoose.Types.ObjectId.isValid(commentId)){
        return res.status(404).send('Comments unavailable...');
    }
    updateNoOfPosts( _id, noOfComments)
    try{
        await Posts.updateOne(
            { _id }, 
            { $pull: { 'comment': { _id: commentId } } }
        )
        res.status(200).json({ message: "Successfully deleted..."})
    }catch(error){
        res.status(405).json(error)
    }
}*/