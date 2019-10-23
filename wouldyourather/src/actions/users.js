
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function recevieUsers ( users ){
    return{
        type: RECEIVE_USERS,
        users
    }

}

// To update the user answer and question that created by user
// i will user the questions action .