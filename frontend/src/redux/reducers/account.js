import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
  isLoading: false,
  data: {},
  error: false,
  errorMessage: '',
  isSaving: false,
  saved: false
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

export const updateUserAccountRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isSaving: true,
    error: false,
    errorMessage: '',
    saved: false
  }
}

export const updateUserAccountSuccess = (state = INITIAL_STATE, action) => {
  const newBalance = {
    ...state.userAccount
  }
  Object.keys(action.userAccount).forEach(key => {
    newBalance[key] = action.userAccount[key]
  })
  return {
    ...state,
    isSaving: false,
    data: newBalance,
    saved: true
  }
}

export const updateUserAccountFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    error: true,
    errorMessage: action.error,
    saved: false
  }
}

export const updateUserAccountReset = (state = INITIAL_STATE) => {
  return {
    ...state,
    isSaving: false,
    saved: false
  }
}

export const HANDLERS = {
  [Types.GET_USER_ACCOUNT_REQUEST]: getUserAccountRequest,
  [Types.GET_USER_ACCOUNT_SUCCESS]: getUserAccountSuccess,
  [Types.GET_USER_ACCOUNT_FAILURE]: getUserAccountFailure,

  [Types.UPDATE_USER_ACCOUNT_REQUEST]: updateUserAccountRequest,
  [Types.UPDATE_USER_ACCOUNT_SUCCESS]: updateUserAccountSuccess,
  [Types.UPDATE_USER_ACCOUNT_FAILURE]: updateUserAccountFailure,
  [Types.UPDATE_USER_ACCOUNT_RESET]: updateUserAccountReset
  
}

export default createReducer(INITIAL_STATE, HANDLERS)
