import React, { Component } from 'react'
import {Button, Card, Image, Segment, Grid, Progress,Icon} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestionAnswer} from '../actions/questions'




class QuestionPoll extends Component{ 
    // for Question 
    // give every option value
    // select the user option
    // save it with dispatch
    // value to switch the page


    // for Answered page
    // 


        state = {
            answer:''
        }


    toDetails = (e, id) => {
        e.preventDefault()
        this.props.history.push(`/questions/${id}`)
    }

   


    handleChange = (event) => {
        const nawValue = event.target.value;
        this.setState({
            answer: nawValue
        })
        
        console.log(this.state.answer)
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        const { dispatch, question, user } = this.props;
        const { answer}=this.state

        dispatch(handleAddQuestionAnswer(question.id, answer))

        console.log(user.answers)

    }

   

    render(){
        const { 
            avatar,
            authorName,
            optionOne,
            optionTwo,
            question,
            user,
            voteForOptionOne,
            voteForOptionTwo,
            totalVotes,
            authedUser
            } =this.props
        const { answer} =this.state

        const resultPage = question.optionOne.votes.includes(authedUser) && 'optionOne' ||
            question.optionTwo.votes.includes(authedUser) && 'optionTwo' ;

  const OpenResultPage=()=>{
        if (resultPage){
            return resultPage
        }
        else{
            return '';
        }
    }


        return(
           <Card.Group>
             <Card>
              <Card.Content>
                        <Segment>
                            <Grid columns={2} relaxed='very'>
                                <Grid.Column>
                                    <div className="four wide co</div>lumn">
                        <Image  floated='right' className="avatar"  src={avatar}/>
                        </div>
                                    <div className="nine wide column">
                        <Card.Header>{authorName} asks: </Card.Header>
                     </div>
                                </Grid.Column>
                                <Grid.Column>
                
                          <br/>
                         {OpenResultPage!==null?
                        (
                          <form onSubmit={this.handleSubmit}>
                           <Card.Meta>Would you rather</Card.Meta>
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
                                                <div className="form-group">
                                                        <Button disabled={answer === ''} className="cssBtn twoButtonSing btn btn-primary" style={{ backgroundcolor: '#b6afaf' }} type="submit" >
                                                        Submit
                                             </Button>
                                                </div>       
                                 </Card.Description>
                                      
                                    </form>

                                    ) : (    <Card.Content>
                                                <Card.Header>Result</Card.Header>
                                          
                                            <Card.Description >
                                                <p>{optionOne}</p>
                                                <div className="ui progress w-50 p-3" floated='right'>
                                                {user.answers[question.id] === "optionOne"&&(
                                                    <Icon name="check" 
                                                        circular
                                                        color="green"
                                                        inverted
                                                        style={{ marginLeft: 10 }}/>
                                                )}
                                                <Progress value={voteForOptionOne} total={totalVotes} progress='percent' 
                                                label={`${voteForOptionOne} out of ${totalVotes} votes`}/>
                                                </div>

                                                <p>{optionTwo}</p>
                                                <div className="ui progress w-50 p-3 " floated='right'>
                                                {user.answers[question.id] === "optionTwo" && (
                                                    <Icon name="check"
                                                        circular
                                                        color="green"
                                                        inverted
                                                        style={{ marginLeft: 10 }} />
                                                )}
                                                <Progress value={voteForOptionTwo} total={totalVotes} progress='percent' 
                                                label={`${voteForOptionTwo} out of ${totalVotes} votes`} />
                                                </div>
             
                                            </Card.Description>
                                            </Card.Content> 
                                            ) }

                                </Grid.Column>
                            </Grid>
                        </Segment>
                       
            </Card.Content>
            
            <Card.Content extra>
                        <div className="form-group">
                            <Button className='btn btn-default mt-2 ui two buttons'  basic color='green' onClick={(e) => this.toDetails(e, question.id )}>
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
    const authorName = users[question.author].name
    const user = users[question.author]
    const avatar = users[question.author].avatarURL;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;
    const voteForOptionOne = question.optionOne.votes.length
    const voteForOptionTwo = question.optionOne.votes.length
    const totalVotes = voteForOptionOne + voteForOptionTwo;


    
    return{

        authedUser,
        authorName,
        avatar,
        optionOne,
        optionTwo,
        question: question ? question:null,
        user,
        voteForOptionOne,
        voteForOptionTwo,
        totalVotes

    }

}

export default withRouter(connect(mapStateToProps)(QuestionPoll));

