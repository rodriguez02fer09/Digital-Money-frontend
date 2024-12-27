import {parseInt} from 'lodash'

export const createAccountForm = [
  {
    registerData: {
      required: 'El nombre es requerido',
      minLength: {
        value: 2,
        message: 'El nombre debe tener al menos 3 caracteres',
      },
      maxLength: {
        value: 50,
        message: 'El nombre no puede tener más de 50 caracteres',
      },
    },
    name: 'firstname',
    size: 'large',
    color: 'black',
    placeholder: 'Nombre*',
    type: 'text',
  },
  {
    registerData: {
      required: 'El apellido es requerido',
      minLength: {
        value: 2,
        message: 'El apellido debe tener al menos 3 caracteres',
      },
      maxLength: {
        value: 50,
        message: 'El apellido no puede tener más de 50 caracteres',
      },
    },
    name: 'lastname',
    size: 'large',
    color: 'black',
    placeholder: 'Apellido*',
    type: 'text',
  },
  {
    registerData: {
      required: 'El campo DNI es obligatorio.',
      pattern: {
        value: /^\d+$/,
        message: 'DNI inválido',
      },
    },
    name: 'dni',
    size: 'large',
    color: 'black',
    placeholder: 'DNI*',
    type: 'text',
  },
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
  {
    registerData: {
      required: 'Contraseña es requerida',
      minLength: {
        value: 6,
        message: 'La contraseña debe tener al menos 6 caracteres',
      },
      pattern: {
        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
        message: 'Contraseña no válida',
      },
    },
    name: 'password',
    size: 'large',
    color: 'black',
    placeholder: 'Contraseña*',
    type: 'password',
  },
  {
    registerData: {
      required: 'La confirmación de la contraseña es requerida',
      validate: (value, context) =>
        value === context.password || 'Las contraseñas no coinciden', // Validar que coincidan
    },
    name: 'confirmPassword',
    size: 'large',
    color: 'black',
    placeholder: 'Confirmar contraseña*',
    type: 'password',
  },
  {
    registerData: {
      required: 'El campo teléfono es obligatorio.',
      pattern: {
        value: /^\d{8,15}$/, // Validar formato de teléfono (por ejemplo, 10 dígitos)
        message: 'Teléfono inválido',
      },
    },
    name: 'phone',
    size: 'large',
    color: 'black',
    placeholder: 'Teléfono*',
    type: 'tel',
  },
]
