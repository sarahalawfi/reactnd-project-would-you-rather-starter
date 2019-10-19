import React, { Component, Fragment } from 'react'
import LogIn from './login';
import "./App.css"
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import { LoadingBar } from 'react-redux-loading';
import NavBar from './nav'



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser}=this.props
    return (
     
        <Router>
          <Fragment>
            <LoadingBar/>
            <div className='container'>
            { authedUser !== null ?
              < NavBar /> : ''
            }
                  <Route path='/' exact component={LogIn} />
                <Route path='/Home'  component={Home} />
                
            </div>
          </Fragment>
        </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}


export default connect(mapStateToProps)(App);
