import { required, email, integer } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

// No message specified.
extend('email', email)

// Override the default message.
extend('required', {
  ...required,
  message: 'Diese Feld darf nicht leer sein'
})

extend('integer', {
  ...integer,
  message: 'Diese Feld darf nur aus Zahlen bestehen'
})
