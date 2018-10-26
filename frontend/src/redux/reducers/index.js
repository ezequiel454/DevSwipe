import { combineReducers } from 'redux'

import auth from './auth'
import runs from './runs'
import users from './users'
import organization from './organization'

const rootReducer = combineReducers({
  auth,
  runs,
  users,
  organization
})

export default rootReducer
