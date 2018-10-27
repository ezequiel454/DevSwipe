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
