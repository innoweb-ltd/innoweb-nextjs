import axios from "axios"
import countries from "@archsplace/archsplace_countries"
import { GET_GEOLOCATION, GET_GEOLOCATION_ERRORS } from "../actions/types"

import { isEmpty } from "@utils"

// GET IPLOCATION OF USER
export const getIpLocation = () => async dispatch => {
  try {
    // FETCH DATA
    const res = await axios.get(process.env.NEXT_PUBLIC_GEOLOCATION_URL)
    const isCountry = !isEmpty(res.data) && !isEmpty(res.data.country)

    // DISPATCH RESULTS
    dispatch({
      type: GET_GEOLOCATION,
      ip: !isEmpty(res.data) ? res.data.userIP : "",
      countryCode: !isEmpty(res.data) ? res.data.country : "",
      country: isCountry ? countries.getName(res.data.country) : "",
      region: !isEmpty(res.data) ? res.data.region : "",
      city: !isEmpty(res.data) ? res.data.city : "",
      cityLatLong: !isEmpty(res.data) ? res.data.cityLatLong : ""
    })
  } catch (e) {
    dispatch({
      type: GET_GEOLOCATION_ERRORS,
      payload: e.response
    })
  }
}
