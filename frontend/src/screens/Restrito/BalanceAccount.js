import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'

import { Button, Card, Icon, Grid } from 'semantic-ui-react'

import LoaderElement from '../elements/LoaderElement'

class BalanceAccount extends Component{   
    componentDidMount(){
        this.props.loadOrganization()
        this.props.loadAccount()
    }
    handleSave = (value) => {
        this.props.createTransfer([{
            from: this.props.organization.data.id,
            to: this.props.account.data.id,
            asset: this.props.organization.data.asset,
            amount: value
        }])
    }
    render(){
        return (
            <div>
                { this.props.account.isLoading && <LoaderElement /> }
                { !this.props.account.isLoading 
                && 
                <Grid>
                    <Grid.Row columns={1} style={{marginLeft: '1%', marginRight: '80%'}}>
                        <Grid.Column color='teal' style={{  marginTop: '1px', color:'blue' }}>
                            <Icon name='diamond'></Icon> {this.props.account.data.balance}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                <Card.Header style={{ marginTop: '10px', color: 'blue' }}>
                                    <div style={{backgroundColor: '#00B5AD', padding: 15}}>
                                        <Icon name='diamond'></Icon> 5
                                    </div>
                                </Card.Header>
                                <Card.Description>
                                    <Button onClick={() => this.handleSave(5)}>Buy Package (R$: 5)</Button>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column >
                        <Card>
                            <Card.Content>
                                <Card.Header style={{ marginTop: '10px', color: 'blue' }}>
                                    <div style={{backgroundColor: '#00B5AD', padding: 15}}>
                                        <Icon name='diamond'></Icon> 10
                                    </div>
                                </Card.Header>
                                <Card.Description>
                                    <Button onClick={() => this.handleSave(10)}>Buy Package (R$: 10)</Button>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                        <Card>
                            <Card.Content>
                                <Card.Header style={{ marginTop: '10px', color: 'blue' }}>
                                    <div style={{backgroundColor: '#00B5AD', padding: 15}}>
                                        <Icon name='diamond'></Icon> 30
                                    </div>
                                </Card.Header>
                                <Card.Description>
                                    <Button onClick={() => this.handleSave(30)}>Buy Package (R$: 30)</Button>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                <Card.Header style={{ marginTop: '10px', color: 'blue' }}>
                                    <div style={{backgroundColor: '#00B5AD', padding: 15}}>
                                        <Icon name='diamond'></Icon> 50
                                    </div>
                                </Card.Header>
                                <Card.Description>
                                    <Button onClick={() => this.handleSave(50)}>Buy Package (R$: 50)</Button>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column >
                            <Card>
                                <Card.Content>
                                    <Card.Header style={{ marginTop: '10px', color: 'blue' }}>
                                        <div style={{backgroundColor: '#00B5AD', padding: 15}}>
                                            <Icon name='diamond'></Icon> 70
                                        </div>
                                    </Card.Header>
                                    <Card.Description>
                                        <Button onClick={() => this.handleSave(70)}>Buy Package (R$: 70)</Button>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column >
                            <Card>
                                <Card.Content>
                                    <Card.Header style={{ marginTop: '10px', color: 'blue' }}>
                                        <div style={{backgroundColor: '#00B5AD', padding: 15}}>
                                            <Icon name='diamond'></Icon> 100
                                        </div>
                                    </Card.Header>
                                    <Card.Description>
                                        <Button onClick={() => this.handleSave(100)}>Buy Package (R$: 100)</Button>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                }
            </div>    
        )
    }                           
}       

const mapStateToProps = state => {
    return {
        auth: state.auth,
        account: state.account,
        organization: state.organization
    }
}    

const mapDispatchToProps = dispatch => {
    return {
        loadAccount: () => dispatch(ActionCreators.getUserAccountRequest()),
        loadOrganization: () => dispatch(ActionCreators.getOrganizationRequest()),
        createTransfer: (userAccount) => dispatch(ActionCreators.updateUserAccountRequest(userAccount))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BalanceAccount)