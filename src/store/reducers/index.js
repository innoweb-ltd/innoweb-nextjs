import { combineReducers } from "redux"
import { reducer as reduxFormReducer } from "redux-form"

import errorReducer from "./errorReducer"
import locationReducer from "./locationReducer"

const reducer = () =>
  combineReducers({
    geolocation: locationReducer,
    errors: errorReducer,
    form: reduxFormReducer
  })

export default reducer
