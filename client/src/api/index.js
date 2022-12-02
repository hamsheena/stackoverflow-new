import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login',authData); 
export const signUp = (authData) => API.post('/user/signup',authData); 


export const postQuestion = (questionData) => API.post('/question/Ask',questionData); 
export const getAllQuestions =() => API.get('/question/get');
export const deleteQuestion = (id) => API.delete(`/question/delete/${id}`)
export const voteQuestion = (id, value ) => API.patch(`/question/vote/${id}`, { value })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId })
//export const  postAnswer = (id,noOfAnswers,answerBody,userAnswered) => API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered})
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)

export const postPost = (postData) => API.post('/posts/Ask', postData)
export const getAllPosts = () => API.get('/posts/get');
export const postComment = (id, noOfComments, commentBody, userCommented,userImage ) => API.patch(`/comment/post/${id}`, { noOfComments, commentBody, userCommented,userImage })
export const votePost = (id, value) => API.patch(`/posts/vote/${id}`, { value })