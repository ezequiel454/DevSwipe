import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'

export const loadOrganization = ({ api }) => function* () {
  console.log('oi')
  const organization = yield call(api.getOrganization)
  console.log(organization)
  yield put(ActionCreators.getOrganizationSuccess(organization))
}
