import React, { Component, Fragment } from 'react'
import LogIn from './login';
import "./App.css"
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import { LoadingBar } from 'react-redux-loading';
import NavBar from './nav'
import QuestionPoll from './questionPoll'
import LogOut from './LogOut';



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
                  //  <Route path='/LogOut' component={LogOut} /> 

  render() {
    const {authedUser}=this.props
    return (
     
        <Router>
          <Fragment>
            <LoadingBar/>
            <div className='container'>
            <Route path='/' exact component={LogIn} />
            { authedUser !== null ?
              <div>
              < NavBar /> 
                <Route path='/Home'  component={Home} />
                <Route path='/questions/:question_id' component={QuestionPoll}/>
            </div>
            : '' }

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
