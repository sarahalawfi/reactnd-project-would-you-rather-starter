import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'



class QuestionsList extends Component{ 


    toDetails = (e, question_id) => {
        e.preventDefault()
        this.props.history.push(`/questions/${question_id}`)
    }

    render(){
        const { authedUser,
            avatar,
            authorName,
            optionOne,
            optionTwo,
            question,
            id,
            question_id
            } =this.props

       
      
        if (question===null){
            return <p>This Question doesn't existd </p>
        }

       

        return(
           

    <Card.Group>
        <Card>
            <Card.Content>
                        <Image  className="avatar" src={avatar}/>
                        <div className="question-info"></div>
                     <div>
                            <Card.Header>{authorName} asks: </Card.Header>
                     </div>
                     <hr/>
                <Card.Meta>Would you rather</Card.Meta>
                <br/>
                        <Card.Description className="CenterText">
                    
                    <ul>
                         <li className="Option">{optionOne}</li>
                         <li className="Option">{optionTwo}</li>
                    </ul>
                           
                </Card.Description>
                       
            </Card.Content>
            
            <Card.Content extra>
                <div className='ui two buttons'>
                            
                            <Button basic color='green' onClick={(e) => this.toDetails(e, question_id)}>
                        View Poll
                        </Button>
                         
                
                </div>
                
            </Card.Content>
            
        </Card>
         
           
    </Card.Group>
    )
    }
}

function mapStateToProps({ authedUser, questions, users }, { id}){
    // To return all question Details 
    const question = questions[id];
    const question_id = question.id;
    // const result_id = questions[answeredID];
    const authorName = users[question.author].name
    const avatar = users[question.author].avatarURL;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

    
    return{

        authedUser,
        id,
        authorName,
        avatar,
        optionOne,
        optionTwo,
        // result_id,,
        question_id,
        question: question ? question:null

    }

}

export default withRouter(connect(mapStateToProps)(QuestionsList));

