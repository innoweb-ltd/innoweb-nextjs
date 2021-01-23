import { GET_GEOLOCATION, GET_GEOLOCATION_ERRORS } from "../actions/types"
import { HYDRATE } from "next-redux-wrapper"
const initialState = {
  ip: "",
  countryCode: "",
  country: "",
  region: "",
  city: "",
  cityLatLong: ""
}

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case GET_GEOLOCATION:
      return {
        ip: action.ip,
        countryCode: action.countryCode,
        country: action.country,
        region: action.region,
        city: action.city,
        cityLatLong: action.cityLatLong
      }
    case GET_GEOLOCATION_ERRORS:
      return {
        ip: "",
        countryCode: "",
        country: "",
        region: "",
        city: "",
        cityLatLong: ""
      }
    default:
      return state
  }
}
