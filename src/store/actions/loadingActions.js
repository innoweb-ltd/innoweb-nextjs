import { LOADING_DATA, CLEAR_LOADING_DATA, CLEAR_ERRORS } from "./types"

export const loading = () => {
  return {
    type: LOADING_DATA
  }
}

export const clearLoading = () => {
  return {
    type: CLEAR_LOADING_DATA
  }
}

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  })
}
