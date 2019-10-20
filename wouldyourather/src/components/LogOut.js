import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { userLogOut } from '../actions/authedUser'


// I donot need this page  when the user select Sing out button it will clear the authedUser and
//then go to root page or log o=in
class LogOut extends Component {

    componentDidMount() {
        this.props.dispatch(userLogOut())
    }

    render(){
        return(
            <div>
                <Redirect to='/' />
            </div>
        )
    }
}

export default LogOut;

