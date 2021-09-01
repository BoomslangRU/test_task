import React, { useState } from 'react'

import '../../scss/payment.scss'


const Payment = ({ makePayment }) => {

   const [pan, setPan] = useState('')
   const [month, setMonth] = useState('')
   const [year, setYear] = useState('')
   const [cvc, setCvc] = useState('')
   const [cardholder, setCardholder] = useState('')
   const [isSpace, setIsSpace] = useState(false)
   const [errors, setErrors] = useState({})


   const onSubmit = e => {
      e.preventDefault()

      if (!e.target.pan.value || !e.target.month.value
         || !e.target.year.value || !e.target.cvc.value
         || !e.target.cardholder.value) {
         return
      }

      if (!isSpace) {
         setErrors({ ...errors, cardholder: 'введите свое имя и фамилию' })
         return
      }

      e.expire = `${e.target.month.value}/${e.target.year.value}`
      makePayment(e.target.pan.value, e.expire, e.target.cardholder.value, e.target.cvc.value)
   }

   const validationForm = e => {
      const data = e.nativeEvent.data
      const value = e.target.value

      switch (e.target.id) {
         case 'pan':
            if (value.length < 13) {
               setErrors({ ...errors, pan: 'минимум 13 цифр' })
            } else if (value.length > 19) {
               setErrors({ ...errors, pan: 'максимум 19 цифр' })
            } else {
               setErrors(delete errors.pan)
               if (isNaN(data)) {
                  setErrors({ ...errors, pan: 'должно быть числом' })
               }
            }
            return setPan(value)

         case 'month':
            if (value > 12 || value < 1) {
               setErrors({ ...errors, month: 'от 1 до 12' })
            } else {
               setErrors(delete errors.month)
               if (isNaN(data)) {
                  setErrors({ ...errors, month: 'только число' })
               }
            }
            return setMonth(value)

         case 'year':
            if (value > 26 || value < 21) {
               setErrors({ ...errors, year: 'от 21 до 26' })
            } else {
               setErrors(delete errors.month)
               if (isNaN(data)) {
                  setErrors({ ...errors, year: 'только число' })
               }
            }
            return setYear(value)

         case 'cvc':
            if (value.length !== 3) {
               setErrors({ ...errors, cvc: 'только 3 цифры' })
            } else {
               setErrors(delete errors.cvc)
               if (isNaN(data)) {
                  setErrors({ ...errors, cvc: 'только число' })
               }
            }
            return setCvc(value)

         case 'cardholder':
            if (data === ' ' && !isSpace) {
               setIsSpace(true)
            } else if (data === ' ') {
               setErrors({ ...errors, cardholder: 'только 2 слова' })
            } else {
               setErrors(delete errors.cardholder)
               if (!isNaN(data)) {
                  setErrors({ ...errors, cardholder: 'должна быть строка' })
               } else {
                  setErrors(delete errors.cardholder)
               }
            }
            return setCardholder(value)
      }
   }


   return (
      <div className='form'>
         <div>
            <h2 className='form__title'>Оплата банковской картой</h2>
         </div>
         <div>
            <form onSubmit={onSubmit}>

               {/* input card number */}
               <div className='form__pan'>
                  <div>
                     <label className='form__label' htmlFor='pan'>Номер карты</label>
                  </div>
                  <div>
                     <input
                        type='text'
                        name='pan'
                        id='pan'
                        onChange={validationForm}
                        value={pan}
                     />

                     {/* error messages */}
                     {errors.pan
                        ? <hr className='error__hr' />
                        : <hr className='main__hr' />}
                     {errors.pan
                        ? <div className='error'>{errors.pan}</div>
                        : undefined}
                  </div>
               </div>

               {/* card expiry date  */}
               <div className='form__expire'>
                  <div>
                     <label className='form__label' htmlFor='expire'>Месяц/Год</label>
                  </div>
                  <div>
                     <input
                        type='text'
                        name='month'
                        id='month'
                        onChange={validationForm}
                        value={month}
                     />
                     <span>/</span>
                     <input
                        type='text'
                        name='year'
                        id='year'
                        onChange={validationForm}
                        value={year}
                     />
                  </div>

                  {/* error messages */}
                  {errors.month || errors.year
                     ? <hr className='error__hr' />
                     : <hr className='main__hr' />}
                  {(errors.month || errors.cvc) || (errors.year || errors.cvc)
                     ? <div className='error'>
                        {errors.month || errors.year}
                     </div>
                     : undefined}
               </div>

               {/* input cvc code  */}
               <div className='form__cvc'>
                  <div>
                     <label className='form__label' htmlFor='cvc'>Код</label>
                  </div>
                  <div>
                     <input
                        type='password'
                        name='cvc'
                        id='cvc'
                        onChange={validationForm}
                        value={cvc}
                     />

                     {/* error messages */}
                     {errors.cvc
                        ? <hr className='error__hr' />
                        : <hr className='main__hr' />}
                     {errors.cvc
                        ? <div className='error'>{errors.cvc}</div>
                        : undefined}
                  </div>
               </div>

               {/* input card holder  */}
               <div className='form__cardholder'>
                  <div>
                     <label className='form__label' htmlFor='cardholder'>Владелец карты</label>
                  </div>
                  <div>
                     <input
                        type='text'
                        name='cardholder'
                        id='cardholder'
                        onChange={validationForm}
                        value={cardholder}
                     />

                     {/* error messages */}
                     {errors.cardholder
                        ? <hr className='error__hr' />
                        : <hr className='main__hr' />}
                     {errors.cardholder
                        ? <div className='error'>{errors.cardholder}</div>
                        : undefined}
                  </div>
               </div>

               {/* button pay  */}
               <div className='buttonBlock'>
                  <button className='button' disabled={errors.pan || errors.month
                     || errors.year || errors.cvc || errors.cardholder} type='submit'>Оплатить</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Payment