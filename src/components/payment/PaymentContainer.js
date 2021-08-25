import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

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