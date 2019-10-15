import { getInitialData} from '../utils/api'
import {showLoading,hideLoading}from 'react-redux-loading'
import { recevieUsers} from '../actions/users'
import { recevieQuestions } from '../actions/questions'

// thunk action creator 
// Get information from database(API request)

export function handleInitialData(){
    return(dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
         .then(({users,questions})=>{
             dispatch(recevieUsers(users))
             dispatch(recevieQuestions(questions))
             dispatch(hideLoading())
         })

    }
}