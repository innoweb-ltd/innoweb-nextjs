import { combineReducers } from "redux"
import { reducer as reduxFormReducer } from "redux-form"

import errorReducer from "./errorReducer"
import locationReducer from "./locationReducer"
import contactReducer from "./contactReducer"

const reducer = () =>
  combineReducers({
    geolocation: locationReducer,
    errors: errorReducer,
    contact: contactReducer,
    form: reduxFormReducer
  })

export default reducer
