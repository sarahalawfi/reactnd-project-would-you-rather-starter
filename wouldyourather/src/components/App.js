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
              <Fragment>
              < Route path='/' component={LogIn} /> 
              </Fragment>
              :
              <Fragment>
                < NavBar />
                <Switch>
                <Route exact path='/Home'  component={Home} />
                <Route exact path='/questions/:id'  component={QuestionPoll}/>
                <Route exact path='/add'  component={PostQuestion} />
                <Route exact path='/leaderboard'  component={LeaderBoard} />
                  <Route exact path='/LogOut'   component={LogOut} /> 
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
