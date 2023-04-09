import { GM, GN } from "./messageAction"

let initialState = { message: "Hello" }
let messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GM:
            return { message: "Welcome to Rahul Gandhi" }
        case GN:
            return { message: "Welcome to Modi" }
        default:
            return state
    }
}
export { messageReducer }