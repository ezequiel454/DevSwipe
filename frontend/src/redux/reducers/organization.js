import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
  isLoading: false,
  data: []
}

export const getOrganizationRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true
  }
}

export const getOrganizationSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.Organization
  }
}

export const getOrganizationFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: false
  }
}

export const HANDLERS = {
  [Types.GET_ORGANIZATION_REQUEST]: getOrganizationRequest,
  [Types.GET_ORGANIZATION_SUCCESS]: getOrganizationSuccess,
  [Types.GET_ORGANIZATION_FAILURE]: getOrganizationFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)
