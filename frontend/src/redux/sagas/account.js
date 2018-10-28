import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'

export const loadUserAccount = ({ api }) => function* () {
  const user = yield call(api.getUserAccount, 'me')
  if(user){
    yield put(ActionCreators.getUserAccountSuccess(user.data))
  }else{
    yield put(ActionCreators.getUserAccountFailure())
  }
}

export const createUserAccount = ({ api }) => function* (action){
  const swipeAccount = yield call(api.createSwipeUser)
  if(swipeAccount && swipeAccount.data.data.receipt.op_type === 'create_account'){
    const account = {
      account_id: swipeAccount.data.data.account.id,
      user_id: action.userAccount,
      balance: 0
    }
    const result = yield call(api.createUserAccount, account)
    if(result){
      yield put(ActionCreators.createUserAccountSuccess(account))
    }
  }else{
    yield put(ActionCreators.createUserAccountFailure(swipeAccount.data.data.receipt.op_type))
  }
}

