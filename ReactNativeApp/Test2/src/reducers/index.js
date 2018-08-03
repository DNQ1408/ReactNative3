import { combineReducers } from 'redux'

import DoTaskReducer from './DoTaskReducer'

export default combineReducers({
    number: DoTaskReducer
})