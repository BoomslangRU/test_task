import { useFormik } from 'formik'
import React from 'react'

const Payment = () => {

   const initialValues = {
      pan: '',
      month: '',
      year: '',
      cardholder: '',
      cvc: ''
   }

   const onSubmit = e => {
      const expire = `${e.month}/${e.year}`
      console.log('Form data :', expire)
   }

   const validate = e => {
      const errors = {}

      if (!e.pan) {
         errors.pan = 'Required'
      }

      if (!e.month) {
         errors.month = 'Required'
      }

      if (!e.year) {
         errors.year = 'Required'
      }

      if (!e.cardholder) {
         errors.cardholder = 'Required'
      }

      if (!e.cvc) {
         errors.cvc = 'Required'
      }

      return errors
   }

   const formik = useFormik({
      initialValues,
      onSubmit,
      validate
   })

   console.log('Errors :', formik.errors);
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
                        onChange={formik.handleChange}
                        value={formik.values.pan}
                     />
                     {formik.errors.pan
                        ? <div className='error'>{formik.errors.pan}</div>
                        : null}
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
                        onChange={formik.handleChange}
                        value={formik.values.month}
                     />
                     <span>/</span>
                     <input
                        type='text'
                        name='year'
                        id='year'
                        onChange={formik.handleChange}
                        value={formik.values.year}
                     />
                  </div>
                  {formik.errors.month || formik.errors.year
                     ? <div className='error'>{formik.errors.month || formik.errors.year}</div>
                     : null}
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
                        onChange={formik.handleChange}
                        value={formik.values.cvc}
                     />
                     {formik.errors.cvc
                        ? <div className='error'>{formik.errors.cvc}</div>
                        : null}
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
                        onChange={formik.handleChange}
                        value={formik.values.cardholder}
                     />
                     {formik.errors.cardholder
                        ? <div className='error'>{formik.errors.cardholder}</div>
                        : null}
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