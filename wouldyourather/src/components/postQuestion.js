import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import { handleAddQuestion} from '../actions/questions'


class PostQuestion extends Component {
    state = {
        optionOneText:'',
        optionTwoText:'',
        toHome: false,
        }

    handleChangeOptionOne=(event)=>{
        const newValue =event.target.value
        this.setState({
            optionOneText: newValue
        })

    }
    handleChangeOptionTwo=(event)=>{
        const newValue = event.target.value
        this.setState({
            optionTwoText: newValue
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const { optionOneText, optionTwoText,toHome}=this.state

        this.props.dispatch(handleAddQuestion(optionOneText, optionTwoText))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText:'',
            toHome: true
        }))
        

    }

    render(){
        const { optionTwoText, optionOneText,toHome }=this.state

        if (toHome === true) {
            return <Redirect to='/Home' />
        }
     
        return(
            <div className="w-75 p-3 "  >
                <div className="card text-center">
                    <div className="card-header">
                    <h3>Create New Question</h3>
                </div>
                <div className="card-body">
                        <h5 className="card-text">Complete the question</h5>
                        <p className="card-text">Would you rather</p>
                    
                </div>
                <div>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <input className="w-75 p-2" value={optionOneText} onChange={this.handleChangeOptionOne} placeholder='Enter Option One Text Here' />
                            </Form.Field>
                            <h4 className="text-center">OR</h4>
                            <Form.Field>
                                <input className="w-75 p-2" value={optionTwoText} onChange={this.handleChangeOptionTwo} placeholder='Enter Option Two Text Here' />
                            </Form.Field>
                            <Button disabled={optionOneText === '' || optionTwoText===''} className="cssBtn twoButtonSing" type='submit'>Submit</Button>
                        </Form>
                </div>
                <br/>
                    <div className="card-footer text-muted">
                 </div>
            </div>
            </div>
        )

    }
}

export default connect()(PostQuestion);

