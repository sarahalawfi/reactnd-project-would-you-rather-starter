import React, { Component } from 'react'
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { NavLink } from 'react-router-dom'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import picSit from "./../images/settings.png";
import picSitHome from "./../images/home.png";
import picSitPlus from "./../images/plus.png";
import picAbout from "./../images/aboutPaper.png";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";





 


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

                             <NavText>
                             <NavLink  to='/Home'>
                                 Dashbord
                             </NavLink>
                             </NavText>
                          
                        </NavItem >

                         < NavItem eventKey="home" >
                            <NavIcon   >
                                <i className="fa fa-fw fa-home  sidebar" />
                                <img className="picSit" src={picSitPlus} alt="Logo" />

                            </NavIcon>

                            <NavText>
                             <NavLink  to='/add' >
                                  New Question
                             </NavLink>
                             </NavText>
                            
                        </NavItem >

                         < NavItem eventKey="home" >
                            <NavIcon to='/leaderboard'   >
                                <i className="fa fa-fw fa-home  sidebar" />
                                <img className="picSit" src={picAbout} alt="Logo" />

                            </NavIcon>

                            <NavText>
                             <NavLink  to='/leaderboard' >
                                 LeaderBoard
                             </NavLink>
                             </NavText>
                            
                        </NavItem >

                         <NavItem eventKey="charts" >
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart " />
                                <img className="picSit" src={picSit} alt="Logo" />
                            </NavIcon>
                             
                             <NavText>
                                 <NavLink to='/LogOut' >
                                 Sing Out
                             </NavLink>
                             </NavText>
                        
                        </NavItem>

                    </React.Fragment>

                </SideNav.Nav>
            </SideNav>

     </React.Fragment>
    )
}


}

 function mapStateToProps({ authedUser,users}){
    // for image and name 
     const user = users[authedUser]
return{
    user
}}

export default withRouter(connect(mapStateToProps)(NavBar));
