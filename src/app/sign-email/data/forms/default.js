import {parseInt} from 'lodash'

export const createAccountForm = [
  {
    registerData: {
      required: 'Correo es requerido',
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: 'Correo no válido',
      },
    },
    name: 'email',
    size: 'large',
    color: 'black',
    placeholder: 'Correo electrónico*',
    type: 'email',
  },
]
