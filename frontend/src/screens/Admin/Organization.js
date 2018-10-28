import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import LoaderElement from '../elements/LoaderElement'
import { Card } from 'semantic-ui-react'
import Balance from '../elements/Balance'

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
                  <Card.Description>
                    <Balance value={this.props.organization.data.valor} unit='pt-BR' currency='BRL'/>
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



