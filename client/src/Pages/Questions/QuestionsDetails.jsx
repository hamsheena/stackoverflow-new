import React,{useState} from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import copy from 'copy-to-clipboard'

import upArrow from '../../assets/upArrow.png'
import downArrow from '../../assets/downArrow.png'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer,voteQuestion } from '../../actions/question'
import { deleteQuestion } from '../../actions/question'

const QuestionsDetails = () => {

    const {id} = useParams()

    const questionsList = useSelector(state => state.questionsReducer)

    /*var questionsList=[{
        _id:'1',
        upVotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:'what is question?',
        questionBody:'it is meant to be',
        questionTags:['java','nodejs','reactjs'],
        userId:3,
        userPosted:'hamshi',
        askedOn:'jan 1',
        answer: [
          {
            answerBody:"answer",
            userAnswred:"shashi",
            answeredOn:"jan2",
            userId:2
          }
        ]
      },
      {
        _id:'2',
        upVotes:4,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:'what is question?',
        questionBody:'it is meant to be',
        questionTags:['java','nodejs','reactjs'],
        userId:2,
        userPosted:'naseef',
        askedOn:'jan 1',
        answer: [
          {
            answerBody:"answer is",
            userAnswred:"salah",
            answeredOn:"jan 5",
            userId:4
          }
        ]
      },
      {
        _id:'3',
        upVotes:5,
        downVotes:3,
        noOfAnswers:5,
        questionTitle:'what is question?',
        questionBody:'it is meant to be',
        questionTags:['java','nodejs','reactjs'],
        userId:3,
        userPosted:'hamshi',
        askedOn:'jan 1',
        answer: [
          {
            answerBody:"answer",
            userAnswred:"shashi",
            answeredOn:"jan 7",
            userId:2
          }
        ]
      }
      ] */

      const [Answer,setAnswer] = useState('')
      const User = useSelector((state) => (state.currentUserReducer))
      const Navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const url = 'http://localhost:3000'


      const handlePostAns = (e, answerLength) => {
        e.preventDefault();
        if (User === null) {
            alert('Login or Signup to answer a question')
            Navigate('/Auth')
        } else {
            if (Answer === '') {
                alert('Enter an answer before submitting')
            } else {
                dispatch(postAnswer({ id, noOfAnswers:answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId:User.result._id}))
            }
        }
    }

    const handleShare = () => {
        copy(url + location.pathname);
        alert('Copied URL: '+url+location.pathname);
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id,Navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote'))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote'))
    }

  return (
    <div className='question-details-page'>
        {
            questionsList.data === null ?
            <h1>Loading...</h1>:
            <>{
                questionsList.data.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className="question-votes">
                                    <img src={upArrow} alt='' width='18' className='votes-icon' onClick={handleUpVote}/>
                                    <p>{question.upVote.length - question.downVote.length}</p>
                                    <img src={downArrow} alt='' width='25' className='votes-icon' onClick={handleDownVote}/>
                                </div>

                                <div style={{width:"100%"}}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="question-actions-user">
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                User?.result?._id === question?.userId && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>
                                                )
                                            }
                                            
                                        </div>
                                        <div>
                                            <p>asked {moment(question.askedOn).fromNow()}</p>
                                            <Link to={`/users/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                                                <Avatar backgroundColor='orange' px="8px" py="5py">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>{question.userPosted}</div>                                        
                                                </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !== 0 && (
                                <section>
                                    <h3>{question.noOfAnswers} answers</h3>
                                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                                </section>
                            )
                        }
                        <section className="post-ans-container">
                            <h3>Your answer</h3>
                            <form onSubmit={(e) => { handlePostAns(e, question.answer.length) }}>
                                <textarea name='' id='' rows='10' cols='30' onChange={e => setAnswer(e.target.value)}></textarea><br/>
                                <input type="submit" value="Post your answer" className="post-ans-btn" />
                            </form>
                            <p>Browse other questions tagged
                                {
                                    question.questionTags.map((tag) => (
                                        <Link className="ans-tags" to='/tags' key={tag}> {tag} </Link>
                                    ))
                                }or 
                                <Link to='/AskQuestion' style={{color:"#009dff",textDecoration:"none"}}> ask your own questions</Link></p>
                        </section>
                    </div>
                ))
            }
            </>
        }
    </div>
    

  )
}

export default QuestionsDetails