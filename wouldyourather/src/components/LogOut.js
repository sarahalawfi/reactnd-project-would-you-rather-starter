import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { userLogOut } from '../actions/authedUser'



class LogOut extends Component {

    componentDidMount() {
        this.props.dispatch(userLogOut())
    }

    render(){
        return(
            <Redirect to='/'/>
           
        )
    }
}

export default connect()(LogOut);

