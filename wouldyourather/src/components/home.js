import React, { Component } from 'react'
import { connect } from  'react-redux'
import QuestionPoll from './questionPoll'


class Home extends Component {
    render(){

        const { userAnsweredQuestions, questionId }=this.props

        return(
            <div className="pt-5 mt-5">
                <ul className="nav nav-tabs md-tabs nav-center" id="myTabMD" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab-md" data-toggle="tab" href="#home-md" role="tab" aria-controls="home-md"
                            aria-selected="true">Unanswered Questions</a>
                </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab-md" data-toggle="tab" href="#profile-md" role="tab" aria-controls="profile-md"
                        aria-selected="false">Answered Questions</a>
                </li>
            </ul>
            
                <div className="tab-content card w-75 p-3" id="myTabContentMD">
                    <div className="tab-pane fade show active  " id="home-md" role="tabpanel" aria-labelledby="home-tab-md">

                        <ul className="CenterText">
                                {questionId.map(id => (
                                    <li className="Cardss" key={id}>
                                        <QuestionPoll id={id} key={id} />
                                    </li>

                                ))}
                            </ul>
                </div>
                <div className="tab-pane fade" id="profile-md" role="tabpanel" aria-labelledby="profile-tab-md">
                            < ul className="CenterText" >
                                {
                                userAnsweredQuestions.map(id => (
                                    <li className="Cardss" key={id}>
                                        <QuestionPoll id={id} key={id} />
                                    </li> ))}
                           </ul >
                    </div>
               </div>
            </div>
            )
    }
}
function mapStateToProps({ authedUser, questions}){
   
  //userUnansweresQuestions
    const questionId = Object.keys(questions).filter(qid=>
        !questions[qid].optionOne.votes.includes(authedUser)
        && !questions[qid].optionTwo.votes.includes(authedUser)
        ).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
   //userAnsweredQuestions
    const userAnsweredQuestions = Object.keys(questions).filter( qid =>
         questions[qid].optionOne.votes.includes(authedUser) 
        || questions[qid].optionTwo.votes.includes(authedUser)
        ).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
   
    
    return{
        questionId,
        userAnsweredQuestions

    }
 }

export default connect(mapStateToProps)(Home);