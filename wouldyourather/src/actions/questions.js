import { saveQuestion, saveQuestionAnswer } from "../utils/api"

export const RECEIVE_QUESTIONS ='RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function recevieQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}



// add the questions
export function addQuestion(question){
return{
    type: ADD_QUESTION,
    question
    };

}

// add (save) the questions to database then pass it to addQuestion action
export function handleAddQuestion(optionOneText, optionTwoText) {
    // will take the 2 option and the authedUer from getState.
    return (dispatch, getState) => {
        const { authedUser } = getState()

        const info = { optionOneText,
             optionTwoText,
            author: authedUser};

        return saveQuestion(info)
            .then((question) => dispatch(addQuestion(question)))
    }
}



//add Questions Answer
export function addQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer 
    };

}

//add (save)QuestionAnswer to database then pass it to addQuestionAnswer action .
export function handleAddQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const info = { qid, answer, authedUser };
        dispatch(addQuestionAnswer(info))
        return saveQuestionAnswer(info).catch(e => {
            console.warn(e,"Error in handleAddQuestionAnswer");
            dispatch(addQuestionAnswer(info));
            alert('There was error in Answered the question');
        });
    }

}