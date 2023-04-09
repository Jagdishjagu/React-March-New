import { createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import { messageReducer } from "./Message/messageReducer"

const store = createStore(messageReducer, composeWithDevTools())
export { store }