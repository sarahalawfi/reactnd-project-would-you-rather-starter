
export const USER_LOG_IN = 'USER_LOG_IN'
export const USER_LOG_OUT ='USER_LOG_OUT'

export function userLogIn(id){
    return{
        type: USER_LOG_IN ,
        id
    }
}

export function userLogOut(){
    return{
        type: USER_LOG_OUT,
    }
}