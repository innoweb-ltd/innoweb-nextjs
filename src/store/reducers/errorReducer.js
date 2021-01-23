import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {}

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case CLEAR_ERRORS:
      return {}
    case GET_ERRORS:
      return action.payload
    default:
      return state
  }
}
