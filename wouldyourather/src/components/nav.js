import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import picSit from "./../images/settings.png";
import picSitHome from "./../images/home.png";
import picSitPlus from "./../images/plus.png";
import picSitCall from "./../images/phone-call.png";
import picAbout from "./../images/aboutPaper.png";
import LogOutImg from "./../images/LogOutImg.png";
import { connect } from 'react-redux'




 


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

                        < NavItem eventKey="home" >
                            <NavIcon to='/Home'  >
                                <i className="fa fa-fw fa-home  sidebar" />
                                <img className="picSit" src={picSitHome} alt="Logo" />
                            </NavIcon>
                            <NavText to='/Home'  >
                                Dashbord
                </NavText>
                        </NavItem >


                        < NavItem eventKey="home" >
                            <NavIcon to='/add'  >
                                <i className="fa fa-fw fa-home  sidebar" />
                                <img className="picSit" src={picSitPlus} alt="Logo" />

                            </NavIcon>
                            <NavText to='/add'  >
                                New Question
                </NavText>
                        </NavItem >

                        < NavItem eventKey="home" >
                            <NavIcon to='/leaderboard'   >
                                <i className="fa fa-fw fa-home  sidebar" />
                                <img className="picSit" src={picAbout} alt="Logo" />

                            </NavIcon>
                            <NavText to='/leaderboard'  >
                                Leader Board
                     </NavText>
                        </NavItem >

                        <NavItem eventKey="charts">

                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart " />
                                <img className="picSit" src={picSit} alt="Logo" />
                            </NavIcon>
                            <NavText to='/'  >
                                Sing Out
                          </NavText>


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


export default connect(mapStateToProps)(NavBar);
