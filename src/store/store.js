import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import mainReducer from './mainReducer'

const reducers = combineReducers({
   paymentPage: mainReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store