import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import mainState from './mainReducer'

const reducers = combineReducers({
   paymentPage: mainState
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store