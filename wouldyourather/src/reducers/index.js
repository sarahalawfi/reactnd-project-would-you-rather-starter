import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'


//Make it in a single Reducer
export default combineReducers({
    authedUser,
    questions,
    users,
    loadingBar: loadingBarReducer,

})

