import {parseInt} from 'lodash'
import FormDatePerfil from '../../../../../../dashBoard/perfil/ui/components/profile/src/FormDatePerfil'

export const formDatePerfil = [
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
      required: 'El campo CUIT es obligatorio.',
      pattern: {
        value: /^\d+$/,
        message: 'CUIT inválido',
      },
    },
    name: 'dni',
    size: 'large',
    color: 'black',
    placeholder: 'CUIT',
    type: 'text',
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
]
