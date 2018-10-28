import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  saved: false,
  isSaving: false,
  userAccount: {},
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
    userAccount: action.userAccount
  }
}

export const getUserAccountFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: false
  }
}

export const createUserAccountRequest = (state = INITIAL_STATE, action) => {
    return {
      ...state,
      isSaving: true,
      error: false,
      errorMessage: '',
      saved: false
    }
  }
  
  export const createUserAccountSuccess = (state = INITIAL_STATE, action) => {
    const newUser = {
      ...state.userAccount
    }
    Object.keys(action.userAccount).forEach(key => {
      newUser[key] = action.userAccount[key]
    })
    return {
      ...state,
      isSaving: false,
      userAccount: newUser,
      saved: true
    }
  }
  
  export const createUserAccountFailure = (state = INITIAL_STATE, action) => {
    return {
      ...state,
      isSaving: false,
      error: true,
      errorMessage: action.error,
      saved: false
    }
  }
  
  export const createUserAccountReset = (state = INITIAL_STATE, action) => {
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

  
  [Types.CREATE_USER_ACCOUNT_REQUEST]: createUserAccountRequest,
  [Types.CREATE_USER_ACCOUNT_SUCCESS]: createUserAccountSuccess,
  [Types.CREATE_USER_ACCOUNT_FAILURE]: createUserAccountFailure,
  [Types.CREATE_USER_ACCOUNT_RESET]: createUserAccountReset
  
}

export default createReducer(INITIAL_STATE, HANDLERS)
