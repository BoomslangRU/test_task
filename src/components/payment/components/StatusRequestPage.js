import React, { Fragment } from 'react'
import '../../../scss/statusRequestPage.scss'
import imageOk from '../../../assets/images/ok.png'
import imageFail from '../../../assets/images/fail.png'

const StatusRequestPage = (props) => {
   return (
      <div className='status'>
         {props.resultQuery === 'ok' && <Fragment><h2 className='status-text-ok'>Оплата произошла успешно</h2><img className='status-images' src={imageOk} /></Fragment>}
         {props.resultQuery === 'fail' && <Fragment><h2 className='status-text-fail'>Произошла ошибка</h2><img className='status-images' src={imageFail} /></Fragment>}
      </div>
   )
}

export default StatusRequestPage