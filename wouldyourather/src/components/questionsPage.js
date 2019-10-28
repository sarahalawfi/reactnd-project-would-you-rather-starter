import React, { Component } from 'react'
import QuestionPoll from './questionPoll'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import ErrorPage from './errorPage'


class QuestionsPage extends Component{

render(){

// Question page
    const { question}=this.props

    if (question === undefined) {
        return <ErrorPage />
    }
    return(
            <Card.Group >
                <Card>
                    <Card.Content>
                    <div className="question-info"></div>
                    <Card.Meta className="CenterText">Would You Rather</Card.Meta>
                        <br />
                    <Card.Description className="CenterText">
                        <QuestionPoll id={question.id} />
                        </Card.Description>
            </Card.Content>
        </Card>
    </Card.Group >
    
    )
}

}

function mapStateToProps({ questions }, props){

    const { id } = props.match.params
    const question = questions[id];
    return{
        id,
        question
    }
}

export default connect(mapStateToProps)(QuestionsPage);