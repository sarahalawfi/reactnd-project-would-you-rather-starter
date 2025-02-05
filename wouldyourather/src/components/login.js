import React, { Component } from 'react'
import Hi from "./../images/Hi.gif";
import { userLogIn, userLogOut} from '../actions/authedUser'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

class LogIn extends Component {

   

  
    state = {
        userName: '',
        toHome: false
    };

    // componentDidMount() {
    //     this.props.dispatch(userLogOut())
    // }


    selectUser = (event) => {

        const newName = event.target.value

        this.setState(() => ({
            userName: newName
        }))
    };
   
    handleSubmit = e => {
  // take the id and pass it to userLogin()
        const { userName, toHome } = this.state
        const { history}=this.props
        e.preventDefault();
        this.props.dispatch(userLogIn(userName))

        if (toHome) {
            const redirect = history.location.state;
            if (redirect != null) {
                return <Redirect to={redirect} push={true} />
            }
            return <Redirect to='/Home' />
        }


    };
  

   

    render() {
        const { userName, toHome }=this.state
        const {history,users }=this.props

        if (toHome) {
            const redirect = history.location.state;
            if (redirect != null) {
                return <Redirect to={redirect} push={true} />
            }
            return <Redirect to='/Home' />
        }
       
        return (
            
            <div className="pt-5 mt-5">
                <div className="container mmmm">
                    <h3 id="textForSingIn">Welcome to the Would You Rather App!</h3>
                    <div className="row">
                        <div className="col-sm">
                        <img  className="pucHomeSingin" src={Hi} alt="Logo" />
                        </div>
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
                                  
                                    <div className="col-sm ">
                                    <button disabled={userName === ''}  type="submit" className="cssBtn twoButtonSing">Sign In</button>
                                    </div>
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




export default withRouter(connect(mapStateToProps)(LogIn));
