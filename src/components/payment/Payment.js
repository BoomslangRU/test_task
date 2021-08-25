import { useFormik } from 'formik'
import React from 'react'

import '../../scss/payment.scss'
import validationSchema from '../common/validationSchema'

const Payment = (props) => {
   console.log('Props :', props);

   const initialValues = {
      pan: '',
      month: '',
      year: '',
      cvc: '',
      cardholder: ''
   }

   const onSubmit = e => {
      e.expire = `${e.month}/${e.year}`
      console.log('Form data :', e)
   }

   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema
   })

   return (
      <div className='box'>
         <div>
            <h2 className='box-title'>Оплата банковской картой</h2>
         </div>
         <div>
            <form onSubmit={formik.handleSubmit}>

               {/* input card number */}
               <div className='form-pan'>
                  <div>
                     <label className='style-label' htmlFor='pan'>Номер карты</label>
                  </div>
                  <div>
                     <input
                        type='text'
                        name='pan'
                        id='pan'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.pan}
                     />

                     {/* error messages */}
                     {formik.errors.pan
                        ? <hr className='error-hr' />
                        : <hr className='main-hr' />}
                     {formik.errors.pan || formik.touched.pan
                        ? <div className='error'>{formik.errors.pan}</div>
                        : undefined}
                  </div>
               </div>

               {/* card expiry date  */}
               <div className='form-expire'>
                  <div>
                     <label className='style-label' htmlFor='expire'>Месяц/Год</label>
                  </div>
                  <div>
                     <input
                        type='text'
                        name='month'
                        id='month'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.month}
                     />
                     <span>/</span>
                     <input
                        type='text'
                        name='year'
                        id='year'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.year}
                     />
                  </div>

                  {/* error messages */}
                  {formik.errors.month || formik.errors.year
                     ? <hr className='error-hr' />
                     : <hr className='main-hr' />}
                  {(formik.errors.month || formik.errors.cvc) || (formik.errors.year || formik.errors.cvc)
                     ? <div className='error'>
                        {formik.errors.month || formik.errors.year}
                     </div>
                     : undefined}
               </div>

               {/* input cvc code  */}
               <div className='form-cvc'>
                  <div>
                     <label className='style-label' htmlFor='cvc'>Код</label>
                  </div>
                  <div>
                     <input
                        type='password'
                        name='cvc'
                        id='cvc'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.cvc}
                     />

                     {/* error messages */}
                     {formik.errors.cvc
                        ? <hr className='error-hr' />
                        : <hr className='main-hr' />}
                     {formik.errors.cvc || formik.touched.cvc
                        ? <div className='error'>{formik.errors.cvc}</div>
                        : undefined}
                  </div>
               </div>

               {/* input card holder  */}
               <div className='form-cardholder'>
                  <div>
                     <label className='style-label' htmlFor='cardholder'>Владелец карты</label>
                  </div>
                  <div>
                     <input
                        type='text'
                        name='cardholder'
                        id='cardholder'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.cardholder}
                     />

                     {/* error messages */}
                     {formik.errors.cardholder
                        ? <hr className='error-hr' />
                        : <hr className='main-hr' />}
                     {formik.errors.cardholder || formik.touched.cardholder
                        ? <div className='error'>{formik.errors.cardholder}</div>
                        : undefined}
                  </div>
               </div>

               {/* button pay  */}
               <div className='buttonBlock'>
                  <button className='button' disabled={!formik.isValid} type='submit'>Оплатить</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Payment