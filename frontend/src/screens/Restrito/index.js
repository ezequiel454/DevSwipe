import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import Runs from './Runs'
import MyAccount from './MyAccount'
import ChangePass from './ChangePass'
import BalanceAccount from './BalanceAccount'

import Header from './elements/Headers'
import CreateRun from './CreateRun';

const Restrito = props => {
  if(props.auth.isSigningin){
    return <p>Loading..</p>
  }
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />
  }
  return (
    <div>
        <Header />
        <Route exact path={`${props.match.path}`} component={Home} />
        <Route path={`${props.match.path}/runs`} component={Runs} />
        <Route path={`${props.match.path}/my-account`} component={MyAccount} />
        <Route path={`${props.match.path}/change-pass`} component={ChangePass} />
        <Route path={`${props.match.path}/create-run`} component={CreateRun} />
        <Route path={`${props.match.path}/my-balance`} component={BalanceAccount} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Restrito)
