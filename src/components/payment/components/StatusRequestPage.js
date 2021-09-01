import React, { Fragment } from 'react'
import '../../../scss/statusRequestPage.scss'
import imageOk from '../../../assets/images/ok.png'
import imageFail from '../../../assets/images/fail.png'

const StatusRequestPage = ({ resultQuery }) => {
   return (
      <div className='status'>
         {resultQuery === 'ok' &&
            <Fragment>
               <h2 className='status__text-ok'>Оплата произошла успешно</h2>
               <img src={imageOk} />
            </Fragment>}

         {resultQuery === 'fail' &&
            <Fragment>
               <h2 className='status__text-fail'>Произошла ошибка</h2>
               <img src={imageFail} />
            </Fragment>}
      </div>
   )
}

export default StatusRequestPage