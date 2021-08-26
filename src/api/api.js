import * as axios from 'axios'

import { randomId } from './common/randomId'

const instance = axios.create({
   baseURL: 'http://localhost:2050/'
})

export const paymentAPI = {
   makePayment(pan, expire, cardholder, cvc) {
      return instance.post(`api`, {
         "jsonrpc": "2.0",
         "id": randomId(),
         "method": "pay",
         "params": {
            pan, expire, cardholder, cvc
         }
      })
         .then(response)
   },
   waitingStatus(pit) {
      return instance.get(`pay/check/${pit}`)
         .then(response)
   }
}