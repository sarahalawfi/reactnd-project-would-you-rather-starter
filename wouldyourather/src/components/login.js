import React, { Component } from 'react'
import Hi from "/Users/sara/react/project4/reactnd-project-would-you-rather-starter/wouldyourather/src/images/Hi.gif";
import { userLogOut, userLogIn } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
    // componentDidMount(){
    //     this.props.dispatch(userLogOut())
    // }
    state = {
        userName: '',
        toHome: false
    };

    selectUser = (event) => {

        const newName = event.target.value

        this.setState(() => ({
            userName: newName
        }))
    };
   
    handleSubmit = e => {
  // take the id and pass it to userLogin()
        e.preventDefault();
        const { userName }=this.state
        this.props.dispatch(userLogIn(userName))

        this.setState(()=>({
            toHome: userName===''?false:true
        }))

    };
       

   

    render() {
        const { userName, toHome }=this.state
        const { users }=this.props

        console.log(users);
   
        if(toHome === true){
            return <Redirect to='/Home' />
        }
       
        return (
            
            <div className="pt-5 mt-5">
                <div class="container mmmm">
                    <h3 id="textForSingIn">Welcome to the Would You Rather App!</h3>
                    <div class="row">
                        <img className="col-sm" className="pucHomeSingin" src={Hi} alt="Logo" />
                        <form className="col-sm yyyy" onSubmit={this.handleSubmit}>
                            <h1 className="changeH1 h1Addpost"> Sing in </h1>
                            <div className="form-group">
                                <select className="form-control formSingn" value={userName ? userName  : ''} onChange={this.selectUser}>
                                    <option value="" disabled >Search Edo...</option>
                                 { users.map((user)=>(  
                                    //  <img src={user.avatarURL} alt="img" />
                                     <option value={user.id} key={user.id} >{user.name}</option>
                                 ))
                                 }
                             </select>
                            </div>
                            <div className="container">
                                <div className="row">
                                  
                                    
                                    <button disabled={userName === ''} className="col-sm" type="submit" className="cssBtn twoButtonSing">Sign In</button>
                                    
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps({users}){
    
    return{
        users : Object.values(users)
    }
}




export default connect(mapStateToProps)(LogIn);
