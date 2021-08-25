import * as axios from 'axios'

import { randomId } from './common/randomId'

const instance = axios.create({
   baseURL: 'http://localhost:2050/',
   req: {
      "jsonrpc": "2.0",
      "id": randomId()
   }
})

export const paymentAPI = {
   getPayment(pan, expire, cardholder, cvc) {
      return instance.post(`api`, {
         "method": "pay",
         "params": {
            pan, expire, cardholder, cvc
         }
      })
         .then(response => {
            console.log('Response :', response)
         })
   }
}