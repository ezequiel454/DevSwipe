import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import LoaderElement from '../elements/LoaderElement'
import { Card, Icon } from 'semantic-ui-react'

class Organization extends Component{   
    componentDidMount(){
        this.props.load()
    }
    render(){
      return (
        <div>
          {
            this.props.organization.isLoading && <LoaderElement />
          }
          {
            !this.props.organization.isLoading &&
            <div>
              <Card>
                <Card.Content>
                  <Card.Header>Organization: {this.props.organization.data.name}</Card.Header>
                  <Card.Description style={{ marginTop: '10px', color: 'blue' }}>
                      <div style={{backgroundColor: '#00B5AD', padding: 15}}>
                        <Icon name='diamond'></Icon> {this.props.organization.data.valor}
                      </div>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          }
      </div>
    )
  }                           
}       
//R$: {this.props.organization.data.valor}
const mapStateToProps = state => {
    return {
        organization: state.organization
    }
}    

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionCreators.getOrganizationRequest())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Organization)



