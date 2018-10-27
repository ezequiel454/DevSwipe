import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'

export const loadOrganization = ({ api }) => function* () {
  const organization = yield call(api.getOrganization)
  yield put(ActionCreators.getOrganizationSuccess(organization))
}
