import { combineReducers } from 'redux'

import auth from './auth'
import runs from './runs'
import users from './users'
import organization from './organization'
import account from './account'

const rootReducer = combineReducers({
  auth,
  runs,
  users,
  organization,
  account
})

export default rootReducer
