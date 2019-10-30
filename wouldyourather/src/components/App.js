import React, { Component, Fragment } from 'react'
import LogIn from './login';
import "./App.css"
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import { LoadingBar } from 'react-redux-loading';
import NavBar from './nav'
import QuestionPoll from './questionsPage'
import LogOut from './LogOut';
import PostQuestion from './postQuestion'
import LeaderBoard from './leaderBoard'
import ErrorPage from './errorPage'



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
                

  render() {
    const {authedUser}=this.props
      
    return (
     
        <Router>
          
          <Fragment>
          <LoadingBar />
          <div className="container">
           
            {authedUser === null ?
           
             < LogIn /> :
              
              <Fragment>
                < NavBar />
                <Switch>
                
                  <Route path='/'  exact component={Home} />
                  < Route path='/' exact component={LogIn} /> 
                  <Route path='/questions/:id' exact  component={QuestionPoll}/>
                  <Route path='/add' exact  component={PostQuestion} />
                  <Route path='/leaderboard' exact component={LeaderBoard} />
                  <Route path='/LogOut'  exact component={LogOut} /> 
                <Route  component={ErrorPage} />
                </Switch>
              </Fragment>
               
           }  
           
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
