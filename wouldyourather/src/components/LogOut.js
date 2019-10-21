import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { userLogOut } from '../actions/authedUser'



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

