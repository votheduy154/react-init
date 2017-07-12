import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { initReducer } from '../redux'

const rootReducer = combineReducers({
    initStore: initReducer,
    routing: routerReducer,
})
export default rootReducer

