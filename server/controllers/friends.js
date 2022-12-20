import User from '../models/auth.js'

export const friendUser = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const userToFollow = await User.findById(_id) //finding user by id
        const loggedInUser = await User.findById(req.userId) //finding logged in user
        if (!userToFollow) {
            return res.status(404).json({
                message: 'User not found',
                success: false,
            })
        }
        //if user is following himself
        if (userToFollow._id.toString() === loggedInUser._id.toString()) {
            return res.status(400).json({
                message: 'You cannot be friend with yourself',
                success: false,
            })
        }

        if (loggedInUser.friends.includes(userToFollow._id)) {    //if user is already following
            const indexFollowing = loggedInUser.friends.indexOf(userToFollow._id)
            loggedInUser.friends.splice(indexFollowing, 1); //removing user from following

            const indexFollowers = userToFollow.friends.indexOf(loggedInUser._id)
            userToFollow.friends.splice(indexFollowers, 1) //removing user from followers

            await loggedInUser.save()
            await userToFollow.save()
            return res.status(200).json({
                success: true,
                message: "User Unfriend"
            })
        } else {

            loggedInUser.friends.push(userToFollow._id)    //adding user to my data
            userToFollow.friends.push(loggedInUser._id)    //adding user to friends data

            await loggedInUser.save()
            await userToFollow.save()
            return res.status(200).json({
                success: true,
                message: "User Friend added"
            })
        }
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}