import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
    postTitle: { type: String, required: "Post must have a title"},
    postPic: { type: String},
    postVideo: {type:String},
    noOfComments: { type: Number, default: 0},
    likes: { type: [String], default: []},
    
    userPosted: { type: String, required: "Post must have an author"},
    userPic: { type: String},
    userId: { type: String},
    postedOn: { type: Date, default: Date.now},
    comment: [{
        commentBody: String,
        userCommented: String,
        userImage:String,
        userId: String,
        commentedOn: { type: Date, default: Date.now},
    }]
})

export default mongoose.model("Post", PostSchema)