import React, { Component,Fragment} from 'react'
import { connect } from 'react-redux'
import { Card, Image, Label }  from 'semantic-ui-react'


class LeaderBoard extends Component{
    render(){
        const { users}=this.props
        return(
        <Fragment>
          {users.map(user=>(
              <Card.Group className="mt-4  w-75 " key={user.id} >
                <Card>
                      <div className="ui equal width grid marginCard">
                    <Card.Content>
                              <div className="column">
                                  <div className="ui medium image ui segment">
                                  <Image className="avatar" src={user.avatarURL} />
                                     </div>
                             </div >

                              <div className="eight wide column">
                                  <div className="ui segment">
                                      <Card.Header as="h4"> 
                              {user.name} 
                              </Card.Header>     
                           <br/>
                          <br/>
                          <Card.Description >
                              Answered questions <span>{Object.keys(user.answers).length}</span>
                         </Card.Description >
                         
                          <Card.Description > 
                              Created questions <span>{user.questions.length}</span>
                            </Card.Description>
                                  </div>
                              </div>

                              <div className="column ml-auto w-50">
                                  <div className="ui segment">
                                      <Card.Header as="h3" textAlign="center" >
                                          Score
                                    </Card.Header>
                                      <Label >
                                          {Object.keys(user.answers).length + user.questions.length}
                                      </Label>
                                  </div>
                              </div>
                    </Card.Content>

                      </div>
                </Card>
            </Card.Group>
             ))}
         </Fragment>
        )
    }
}

function mapStateToProps({ users }) {
return{
    users: Object.values(users).sort((a, b) => (
        (Object.keys(b.answers).length + b.questions.length) -
        (Object.keys(a.answers).length + a.questions.length ))

    )}
}

export default connect(mapStateToProps)(LeaderBoard);