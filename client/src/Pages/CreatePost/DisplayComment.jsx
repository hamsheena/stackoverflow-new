import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Comments.css'
import { useSelector } from 'react-redux'
import moment from 'moment'

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
                        <img src={ans.userImage} alt={ ans.userCommented.charAt(0).toUpperCase() } width="15" className='user' />
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