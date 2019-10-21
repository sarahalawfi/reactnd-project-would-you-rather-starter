import React, { Component } from 'react'
import { Button, Card, Image, Segment, Grid, Divider} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleAddQuestionAnswer} from '../actions/questions'



class QuestionPoll extends Component{ 
    // for Question 
    // give every option value
    // select the user option
    // save it with dispatch


    // for Answered page
    // 


        state = {
            answer:''
        }
   

    handleChange = (event) => {
        const nawValue = event.target.value;
        this.setState({
            answer: nawValue
        })
        // this.props.dispatch(handleAddQuestionAnswer(this.props.question.id,this.state.answer))
        console.log(this.state.answer)
    }

    toDetails = (e, id) => {
        e.preventDefault()
        this.props.history.push(`/questions/${id}`)
    }


    render(){
        const { 
            avatar,
            authorName,
            optionOne,
            optionTwo,
            question,
            question_id
            } =this.props
        const { answer} =this.state

        if (question===null){
            return <p>This Question doesn't existd </p>
        }

        return(
           <Card.Group>
             <Card>
              <Card.Content>
                        <Segment>
                            <Grid columns={2} relaxed='very'>
                                <Grid.Column>
                        <div class="four wide co</div>lumn">
                        <Image  className="avatar"  src={avatar}/>
                        </div>
                        <div class="nine wide column">
                        <Card.Header>{authorName} asks: </Card.Header>
                     </div>
                                </Grid.Column>
                                <Grid.Column>
                <Card.Meta>Would you rather</Card.Meta>
                <br/>
                        <Card.Description className="CenterText">


                            <div className="form-check">
                                <label> <input type="radio" name="react-tips" value="optionOne" checked={answer === 'optionOne'} onChange={this.handleChange} className="form-check-input"/>
                                {optionOne}
                                </label>
                                </div>
                            <div className="form-check">
                                <label><input type="radio" name="react-tips" value="optionTwo" checked={answer === 'optionTwo'} onChange={this.handleChange} className="form-check-input" />
                                {optionTwo}
                                </label>
                                     </div>

                </Card.Description>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                       
            </Card.Content>
            
            <Card.Content extra>
                        <div className="form-group">
                            <Button className='btn btn-primary mt-2 ui two buttons' type="submit" basic color='green' onClick={(e) => this.toDetails(e, question.id )}>
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
    // const id = questions[id].id;
    const authorName = users[question.author].name
    const avatar = users[question.author].avatarURL;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

    
    return{

        authedUser,
        authorName,
        avatar,
        optionOne,
        optionTwo,
        question: question ? question:null

    }

}

export default withRouter(connect(mapStateToProps)(QuestionPoll));

