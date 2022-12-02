import React from 'react'
import { useSelector } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'


const HomeMainbar = () => {

  const questionsList = useSelector(state => state.questionsReducer);

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

const location=useLocation();

const navigate=useNavigate();

const user = 1;
const checkAuth = () => {
  if(user === null){
    alert("login or signup to ask a question");
    navigate('/Auth');
  }
  else{
    navigate('/AskQuestion');
  }
}

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
        location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
          <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        }
      
      
      </div>
    </div>
  )
}

export default HomeMainbar