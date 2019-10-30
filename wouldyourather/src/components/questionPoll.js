import React, { Component } from 'react'
import {Button, Card, Image, Segment, Grid, Progress} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { handleAddQuestionAnswer} from '../actions/questions'
import starr from "./../images/starr.png";






class QuestionPoll extends Component{ 
        state = {
            answer:'',
            OpenResultPage:false,
          
        }
        componentDidMount(){
            const { userAnswers, question}=this.props
            if (userAnswers.hasOwnProperty(question.id)) {
                this.setState({
                    OpenResultPage: true
                });

            }
        }

    // toDetails = (e, id) => {
    //     e.preventDefault();
    //     this.props.history.push(`/questions/${id}`);  
      
    // }

    handleChange = (event) => {
        const nawValue = event.target.value;
        this.setState({
            answer: nawValue
        })
        
        console.log(this.state.answer)
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        const { dispatch, question } = this.props;
        const { answer}=this.state;

        this.setState({
            OpenResultPage: true
        })

        dispatch(handleAddQuestionAnswer(question.id, answer))
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
            totalVotes} =this.props
        const { answer, OpenResultPage} =this.state

        return(
            <Link to={`/questions/${question.id}`} className='questions'>
            <Card.Group >
             <Card>
              <Card.Content>
                        <Segment>
                            <Grid columns={2} relaxed='very'>
                                <Grid.Column>
                                    <Grid.Column width={4}>
                        <Image  floated='right' className="avatar"  src={avatar}/>
                                    </Grid.Column>

                        <div className="nine wide column">
                        <Card.Header>{authorName} asks: </Card.Header>
                          </div>
                                </Grid.Column>
                                <Grid.Column>
                          <br/>
                            { !OpenResultPage? (
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
                                <Button disabled={answer === ''} className="cssBtn twoButtonSing btn btn-primary"  type="submit" >
                                    Submit
                                </Button>
                                 </div>       
                                 </Card.Description>
                                   </form> ):(
                                            <React.Fragment>     
                                    <Card.Content>
                                    <Card.Header>Result</Card.Header>
                                     <label className="pCenter">{optionOne}</label>
                                              { user.answers[question.id] === "optionOne" && (
                                                 <img className=" userVote" src={starr} alt="Logo" />
                                                       )}
                                                        
                                                    <Progress value={voteForOptionOne} total={totalVotes} progress='percent'/>
                                                    <label>{`${voteForOptionOne} out of ${totalVotes} votes`} </label>
                                                 
                                                 <br/>
                                     <label className="pCenter">{optionTwo}</label>
                                                {user.answers[question.id] === "optionTwo" && (
                                                      <img className="userVote" src={starr } alt="Logo" />
                                                    )}
                                                 
                                                    <Progress value={voteForOptionTwo} total={totalVotes} progress='percent'/>
                                                    <label>{`${voteForOptionTwo} out of ${totalVotes} votes`} </label>
                          
                                        </Card.Content>
                                            </React.Fragment>
                                        )}

                                   </Grid.Column>
                              </Grid>
                         </Segment>
                         
                       
               </Card.Content>

            
           
        </Card>
        
    </Card.Group>
            </Link>
    )}
}


function mapStateToProps({ authedUser, questions, users }, { id}){
    // To return all question Details 
    const question = questions[id];
    const authorName = users[question.author].name
    const user = users[question.author]
    const avatar = users[question.author].avatarURL;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;
    const voteForOptionOne = question.optionOne.votes.length;
    const voteForOptionTwo = question.optionTwo.votes.length;
    const totalVotes = voteForOptionOne + voteForOptionTwo;
    // for Result page
    const userAnswers = users[authedUser].answers;

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
        totalVotes,
        userAnswers}
    }

export default withRouter(connect(mapStateToProps)(QuestionPoll));

