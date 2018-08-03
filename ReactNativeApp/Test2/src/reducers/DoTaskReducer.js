import { DO_TASK } from '../actions/type'

export default function (state = 0, action) {
    switch(action.type) {
        case DO_TASK:
            return action.payload
        default:
            return state
    }
}