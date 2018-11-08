import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
  isLoading: false,
  data: {},
  error: false,
  errorMessage: ''
}

export const getUserAccountRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true
  }
}

export const getUserAccountSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.userAccount
  }
}

export const getUserAccountFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: false
  }
}

export const HANDLERS = {
  [Types.GET_USER_ACCOUNT_REQUEST]: getUserAccountRequest,
  [Types.GET_USER_ACCOUNT_SUCCESS]: getUserAccountSuccess,
  [Types.GET_USER_ACCOUNT_FAILURE]: getUserAccountFailure
  
}

export default createReducer(INITIAL_STATE, HANDLERS)
