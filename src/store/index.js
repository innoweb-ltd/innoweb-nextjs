import { createWrapper } from "next-redux-wrapper"
import { createStore } from "redux"
import middlewares from "./middlewares"
import reducer from "./reducers"

const store = context => createStore(reducer(), middlewares)
export const wrapper = createWrapper(store, { debug: process.env.NODE_ENV === "development" })
