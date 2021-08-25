import { connect } from 'formik'
import React from 'react'
import { Component } from 'react'

import Payment from './Payment'

class PaymentContainer extends Component {
   render() {
      return (
         <Payment {...this.props} />
      )
   }
}

const mapStateToProps = state => ({
   profile: state.paymentPage.profile
})

export default connect(mapStateToProps, {})(PaymentContainer)