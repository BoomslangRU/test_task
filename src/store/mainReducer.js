import { paymentAPI } from '../api/api'


const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_PIT_ID = 'SET_PIT_ID'
const SET_RESULT_QUERY = 'SET_RESULT_QUERY'

const initialState = {
   isFetching: false,
   resultQuery: null,
   pid: null
}

const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }
      case SET_PIT_ID:
         return { ...state, pid: action.pid }
      case SET_RESULT_QUERY:
         return { ...state, resultQuery: action.result }
      default:
         return state
   }
}


const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
const setPitId = (pid) => ({ type: SET_PIT_ID, pid })
const setResultQuery = (result) => ({ type: SET_RESULT_QUERY, result })


export const makePayment = (pan, expire, cardholder, cvc) => async (dispatch) => {
   dispatch(setIsFetching(true))
   const response = await paymentAPI.makePayment(pan, expire, cardholder, cvc)
   dispatch(setPitId(response.result.pit))
   waitingStatusPayment()
}

const waitingStatusPayment = () => async (dispatch) => {
   const response = await paymentAPI.waitingStatus(pit)
   if (response.status === 'ok') {
      dispatch(setIsFetching(true))
      dispatch(setResultQuery('ok'))
   } else if (response.status === 'fail') {
      dispatch(setIsFetching(true))
      dispatch(setResultQuery('fail'))
   } else {
      firstCallRequest()
   }
}

const firstCallRequest = () => {
   setTimeout(waitingStatusPayment, 1000)
}

export default mainReducer