import React, { Fragment } from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import PaymentForm from './PaymentForm'
import { makePayment } from '../../store/mainReducer'
import Loader from './components/loader'
import StatusRequestPage from './components/StatusRequestPage'

class PaymentContainer extends Component {
   render() {

      if (this.props.isFetching) {
         return <Loader />
      }

      return (
         <Fragment>
            {
               this.props.resultQuery
                  ? <StatusRequestPage {...this.props} />
                  : <PaymentForm {...this.props} />
            }

         </Fragment>
      )
   }
}

const mapStateToProps = state => ({
   resultQuery: state.paymentPage.resultQuery,
   isFetching: state.paymentPage.isFetching
})

export default connect(mapStateToProps, { makePayment })(PaymentContainer)