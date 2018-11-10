import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'

export const loadUserAccount = ({ api }) => function* () {
  let user = yield call(api.getUserAccount, 'me')
  if(user.data.account.balance >= 0){
    yield put(ActionCreators.getUserAccountSuccess(user.data.account))
  }else{
    const swipeAccount = yield call(api.createSwipeUser)
    if(swipeAccount.data.data.receipt.type === 'CREATE_ACC'){
      const userToSave = {
        id: swipeAccount.data.data.value.id
      }
      yield call(api.createUserAccount, userToSave)
      user = yield call(api.getUserAccount, 'me')
      if(user.data.account.balance >= 0){
        yield put(ActionCreators.getUserAccountSuccess(user.data.account))
      }else{
        yield put(ActionCreators.getUserAccountFailure())
      }
    }else{
      yield put(ActionCreators.getUserAccountFailure())
    }
  }
}