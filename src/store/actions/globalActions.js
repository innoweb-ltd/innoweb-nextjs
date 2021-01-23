import axios from "axios"
import { MODAL_ON, MODAL_OFF, GET_ERRORS } from "./types"
import { loading, clearLoading, clearErrors } from "./loadingActions"
import { isEmpty } from "@utils"

export const modalOn = () => {
  return {
    type: MODAL_ON
  }
}

export const modalOff = () => dispatch => {
  dispatch({
    type: MODAL_OFF
  })
}
