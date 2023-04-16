import { INCR, DECR } from "./counterAction"
let initialState = { counter: 1 }
let counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DECR:
            if (state.counter > 1) {
                return {
                    counter: state.counter - 1
                }
            }
        case INCR:
            return {
                counter: state.counter + 1
            }
        default: return state
    }


}
export { counterReducer }