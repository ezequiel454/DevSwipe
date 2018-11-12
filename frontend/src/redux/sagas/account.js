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

export const updateAccountBalance = ({ api }) => function* (action){
  const transfer = yield call( api.createTransfer, action.userAccount)
  console.log(transfer, 'transfer')
  if(transfer.data.opCode === 'OP_SECCESS'){
    const user = yield call(api.getUserAccount, 'me')
    console.log('aui', user)
    yield put(ActionCreators.updateUserAccountSuccess(user))
  }else{
    yield put(ActionCreators.getUserAccountFailure())
  }
}