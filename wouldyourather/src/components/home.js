import React, { Component } from 'react'
import { connect } from  'react-redux'
import QuestionsList from './questionsList'


class Home extends Component {
    render(){
        const { userAnsweredQuestions, questionId, authedUser }=this.props
        // Answered Questions will return questions that match the user answers
        const filterQuestions = questionId.filter(q => (
            userAnsweredQuestions.includes(q)
        ))
            // < ul className = "CenterText" >
            //     {
            //         filterQuestions.map(answeredID => (
            //             <li key={answeredID}>
            //                 <QuestionsList answeredID={answeredID} />
            //             </li>
            //         ))

            //     }

            //             </ul >
      
         

          
        

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
            
            <div className="tab-content card pt-5" id="myTabContentMD">
                <div className="tab-pane fade show active" id="home-md" role="tabpanel" aria-labelledby="home-tab-md">

                        <ul className="CenterText">
                                {this.props.questionId.map(id => (
                                    <li className="Cardss" key={id}>
                                        <QuestionsList id={id} />
                                    </li>

                                ))}
                            </ul>
                </div>
                <div className="tab-pane fade" id="profile-md" role="tabpanel" aria-labelledby="profile-tab-md">
                   
                </div>
                <div className="tab-pane fade" id="contact-md" role="tabpanel" aria-labelledby="contact-tab-md">
                    <p>1</p>
                </div>
            </div>
            </div>
        )
    }
}
function mapStateToProps({ authedUser, questions, users}){
    // take all the questions and then filter it to display the Answered questions
    const questionId = Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const user = users[authedUser];
    const userAnsweredQuestions = Object.keys(user.answers);
   
   


    
    return{
        authedUser,
        userAnsweredQuestions,
        questionId

    }
 }

export default connect(mapStateToProps)(Home);