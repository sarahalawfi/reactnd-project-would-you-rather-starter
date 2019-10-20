import React, { Component } from 'react'
import QuestionsList from './questionsList'
import { connect } from 'react-redux'


class QuestionPoll extends Component{
render(){
    const { question_id}=this.props
    return(
    <div>
            <QuestionsList id={question_id}/>
    </div>
    )
}

}

function mapStateToProps({ questions},props){
    const { question_id } = props.match.params
   
    return{
        question_id,

    }
}

export default connect(mapStateToProps)(QuestionPoll);