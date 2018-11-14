import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'

export const getRuns = ({ api }) => function* (action) {
  let filter = ''
  if(action.admin){
    filter = '?admin=true'
  }
  const runs = yield call(api.getRuns, filter)
  yield put(ActionCreators.getRunsSuccess(runs.data.data))
}

export const createRun = ({ api }) => function* (action) {
  const transfer = yield call( api.createTransfer, [action.run.transfer])
  if(transfer.data.data.opCode === 'OP_SUCCESS'){
    const run = yield call(api.createRun, action.run.data)
    const user = yield call(api.getUserAccount, 'me')
    yield put(ActionCreators.updateUserAccountSuccess(user))
    yield put(ActionCreators.createRunSuccess(run.data))
  }else{
    yield put(ActionCreators.getUserAccountFailure())
  }

}

export const removeRun = ({ api }) => function* (action) {
  yield call(api.removeRun, action.id)
  yield put(ActionCreators.removeRunSuccess(action.id))
}