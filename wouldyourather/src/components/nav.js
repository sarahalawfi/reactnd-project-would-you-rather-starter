import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { NavLink } from 'react-router-dom'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import picSit from "./../images/settings.png";
import picSitHome from "./../images/home.png";
import picSitPlus from "./../images/plus.png";
import picSitCall from "./../images/phone-call.png";
import picAbout from "./../images/aboutPaper.png";
import LogOutImg from "./../images/LogOutImg.png";
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";





 


class NavBar extends Component {

render(){

    const { user } = this.props;

     return(

       <React.Fragment>
            <SideNav >
                
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    

                <React.Fragment>

                        < NavItem eventKey="home" >
                            
                        

                            <NavIcon >
                                <i className="fa fa-fw fa-home sidebarCall" />
                                 <img className="picSit" src={user.avatarURL} alt="Avater" />

                            </NavIcon>
                            <NavIcon>
                                <i className="fa fa-fw fa-home sidebarCall" />
                                 <img className="picSit" src={user.avatarURL} alt="Logo" />
                                 
                            </NavIcon>
                            <NavText>
                                 {`Hello ${user.name}`}
                         </NavText>
                        </NavItem >

                        < NavItem eventKey="home"  >
                            
                            <NavIcon  >
                                <i className="fa fa-fw fa-home  sidebar" />
                                <img className="picSit" src={picSitHome} alt="Logo" />
                            </NavIcon>
                             
                             <NavLink tag={Link} to='/Home'>
                                 Dashbord
                             </NavLink>
                             
                                 

                             

                           
                        </NavItem >


                         < NavItem eventKey="home" >
                            <NavIcon   >
                                <i className="fa fa-fw fa-home  sidebar" />
                                <img className="picSit" src={picSitPlus} alt="Logo" />

                            </NavIcon>
                            
                             <NavLink tag={Link} to='/add' >
                                  New Question
                             </NavLink>
                            
                        </NavItem >

                         < NavItem eventKey="home" >
                            <NavIcon to='/leaderboard'   >
                                <i className="fa fa-fw fa-home  sidebar" />
                                <img className="picSit" src={picAbout} alt="Logo" />

                            </NavIcon>
                          
                             <NavLink tag={Link} to='/leaderboard' >
                                 LeaderBoard
                             </NavLink>
                            
                        </NavItem >

                         <NavItem eventKey="charts" >
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart " />
                                <img className="picSit" src={picSit} alt="Logo" />
                            </NavIcon>
                             
                             <NavLink tag={Link} to='/' >
                                 Sing Out
                             </NavLink>
                            


                        </NavItem>



                    </React.Fragment>

                </SideNav.Nav>
            </SideNav>
         

    </React.Fragment>
    )
}


}

 function mapStateToProps({ authedUser,users})
{
    // for image and name 
     const user = users[authedUser]
return{
    user
}

}


export default withRouter(connect(mapStateToProps)(NavBar));
