import React from 'react'
import { Provider } from 'react-redux'

import PaymentContainer from './components/payment/PaymentContainer'
import store from './store/store'



const App = () => {

   return (
      <Provider store={store}>
         <PaymentContainer />
      </Provider>
   )
}

export default App