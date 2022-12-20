
import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    about:{type:String},
    tags:{type:[String]},
    pic: {type:String, required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg", },
          friends: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    joinedOn:{type:Date,default:Date.now}
})

export default mongoose.model("User", userSchema)