import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Table, Button, Segment, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Duration from '../elements/Duration'
import Distance from '../elements/Distance'
import DateStr from '../elements/DateStr'

import LoaderElement from '../elements/LoaderElement'

class Runs extends Component{   
    componentDidMount(){
        this.props.load()
        this.props.loadAccount()
    }
    renderRun = (run) => {
        return(
            <Table.Row key={run.id}>
                <Table.Cell>
                    {run.friendly_name}
                </Table.Cell>
                <Table.Cell>
                    <Duration duration={run.duration}/>
                </Table.Cell>
                <Table.Cell>
                    <Distance distance={run.distance} metric={this.props.auth.user.unit}/>
                </Table.Cell>
                <Table.Cell>
                    <DateStr date={run.created} timezone={this.props.auth.user.timezone}/>
                </Table.Cell>
                <Table.Cell>
                    <Button basic color='red' onClick={() => this.props.remove(run.id)}>Delete</Button>
                </Table.Cell>
            </Table.Row>   
        )
    }
    render(){
        return (
            <div>
                { this.props.account.isLoading && <LoaderElement /> }
                { !this.props.account.isLoading && 
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <h1>Runs</h1>
                        </Grid.Column>
                        <Grid.Column color='blue' style={{ width: '13%', height: 40, marginTop: '1px', marginLeft: '36%' }}>
                            <Icon name='diamond'></Icon> {this.props.account.data.balance}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                }
                <Button as={Link} to='/restrito/create-run'>New run</Button>
                { this.props.runs.isLoading && <p>Loading...</p>}
                { !this.props.runs.isLoading && this.props.runs.data.length === 0 && <Segment color='blue'>No Data</Segment> }
                { !this.props.runs.isLoading && this.props.runs.data.length > 0 && 
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Duration</Table.HeaderCell>
                            <Table.HeaderCell>Distance</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                            { this.props.runs.data.map(this.renderRun) }
                    </Table.Body>
                </Table> }
            </div>    
        )
    }                           
}       

const mapStateToProps = state => {
    return {
        runs: state.runs,
        auth: state.auth,
        account: state.account
    }
}    

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionCreators.getRunsRequest(false)),
        create: (run) => dispatch(ActionCreators.createRunRequest(run)),
        remove: id => dispatch(ActionCreators.removeRunRequest(id)),
        loadAccount: () => dispatch(ActionCreators.getUserAccountRequest())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Runs)



