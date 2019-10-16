import { saveQuestion, saveQuestionAnswer } from "../utils/api"

export const RECEIVE_QUESTIONS ='RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function recevieQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

// add (save) the questions to database then pass it to addQuestion action
export function handleAddQuestion(optionOneText, optionTwoText){
    // will take the 2 option and the authedUer from getState.
    return (dispatch,getState)=>{
        const{ authedUser }= getState()
        
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author:authedUser

        })
            .then((question) => dispatch(addQuestion(question)))  
    }
}


// add the questions
export function addQuestion(question){
return{
    type: ADD_QUESTION,
    question
    }

}


//add (save)QuestionAnswer to database then pass it to addQuestionAnswer action .
export function handleAddQuestionAnswer(qid, answer){
    return (dispatch,getState)=>{
        const { authedUser }=getState()
        
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
            .then(() => dispatch(addQuestionAnswer(authedUser, qid, answer)))
    }

}



//add Questions Answer
export function addQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer 
    }

}