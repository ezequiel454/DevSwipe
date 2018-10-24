import { takeLatest, all, put } from 'redux-saga/effects'
import ActionCreators from '../actionCreators'
import { Types } from '../actionCreators'

import { getRuns, createRun, removeRun } from './runs'
import { auth, login, destroyAuth, updateProfile, createProfile } from './auth'
import { getUsers, removeUser, getUser, updateUser } from './users'
import Api from '../../service/Api'

import ApiSwipe from '../../service/ApiSwipe'

export default function * rootSaga () {
  
  const devURL = 'http://localhost:3001'
  const prodURL = 'http://api.x.com'
  const baseURL = process.env.NODE_ENV === 'development' ? devURL : prodURL
  const api = new Api(baseURL)
  
  const swipeURL = 'https://api.sandbox.swipetech.io'
  const swipeProdURL = 'https://api.swipetech.io'

  const apiSwipe = new ApiSwipe(swipeURL)

  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login({ api })),
    takeLatest(Types.AUTH_REQUEST, auth({ api, apiSwipe })),
    takeLatest(Types.GET_RUNS_REQUEST, getRuns({ api })),
    takeLatest(Types.CREATE_RUN_REQUEST, createRun({ api })),
    takeLatest(Types.REMOVE_RUN_REQUEST, removeRun({ api })),
    takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
    takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile({ api })),
    takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile({ api })),
    takeLatest(Types.GET_USERS_REQUEST, getUsers({ api })),
    takeLatest(Types.REMOVE_USER_REQUEST, removeUser({ api })),
    takeLatest(Types.GET_USER_REQUEST, getUser({ api })),
    takeLatest(Types.UPDATE_USER_REQUEST, updateUser({ api })),

    put(ActionCreators.authRequest())// start the aplication call
  ])
}