import * as Yup from 'yup'

const validationSchema = Yup.object({
   pan: Yup.string()
      .matches(/^[0-9]+$/, 'Только цифры')
      .min(13, 'Минимум 13 цифр')
      .max(18, 'Максимум 18 цифр')
      .required('Обязательно'),

   month: Yup.number()
      .min(1, 'Не коректно')
      .max(12, 'Не коректно')
      .required('Обязательно'),

   year: Yup.number()
      .min(21, 'Не коректно')
      .max(26, 'Не коректно')
      .required('Обязательно'),

   cvc: Yup.string()
      .matches(/^[0-9]+$/, 'Только цифры')
      .min(3, 'Только 3 цифры')
      .max(3, 'Только 3 цифры')
      .required('Обязательно'),

   cardholder: Yup.string()
      .typeError('Только буквы')
      .required('Обязательно')
})

export default validationSchema