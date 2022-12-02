import * as api from '../api/index'

export const askPost = (postData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postPost(postData)
        dispatch({ type: "POST_POST", payload: data})
        dispatch(fetchAllPosts())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllPosts = () => async (disptach) => {
    try {
        const { data } = await api.getAllPosts()
        disptach({ type: 'FETCH_ALL_POSTS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const postComment = (commentData) => async (dispatch) => {
    try {
        const { id, noOfComments, commentBody, userCommented,userImage } = commentData;
        const { data } = await api.postComment( id, noOfComments, commentBody, userCommented,userImage )
        dispatch({ type: 'POST_COMMENT', payload: data})
        dispatch(fetchAllPosts())
    } catch (error) {
        console.log(error)
    }
}

export const votePost = (id, value) => async (dispatch) => {
    try {
        await api.votePost(id, value)
        dispatch(fetchAllPosts())
    } catch (error) {
        console.log(error)
    }
}
/*
export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        await api.deleteQuestion(id)
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}



export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
    try {
        await api.deleteAnswer(id, answerId, noOfAnswers)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
} */