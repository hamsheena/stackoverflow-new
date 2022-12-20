import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Comments.css'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Avatar from '../../components/Avatar/Avatar'

const DisplayComment = ({post}) => {
    const { id } = useParams()
    var User = useSelector((state) => (state.currentUserReducer))
  return (
    <div>
    {
        post.comment.map((ans) => (
            <div className="display-ans" key={ans._id}>
                <p>{ans.commentBody}</p>
                <div className="question-actions-user">
                    <div>
                        
                    </div>
                    <div>
                        <p>commented {moment(ans.commentedOn).fromNow()}</p>
                        <Link to={`/Users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                        <Avatar backgroundColor='green' px="8px" py="5py">{ans.userCommented.charAt(0).toUpperCase()}</Avatar>
                            <div>
                                {ans.userCommented}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        ))
    }
</div>
  )
}

export default DisplayComment