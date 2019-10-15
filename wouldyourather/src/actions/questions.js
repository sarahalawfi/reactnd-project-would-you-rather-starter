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



// add the questions
export function addQuestion(question){
return{
    type: ADD_QUESTION,
    question
    }

}


//add (save)QuestionAnswer to database then pass it to addQuestionAnswer action .


//add Questions Answer
export function addQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer 
    }

}