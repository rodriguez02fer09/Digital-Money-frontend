import {parseInt} from 'lodash'

export const profileForm = [
  {
    registerData: {},
    name: 'email',
    label: 'Email',
    size: 'large',
    color: 'black',
    placeholder: '',
    type: 'email',
    value: '',
  },
  {
    registerData: {},
    name: 'name',
    label: 'Nombre y apellido',
    size: 'large',
    color: 'black',
    placeholder: '',
    type: 'text',
  },
  {
    registerData: {},
    name: 'dni',
    label: 'CUIT',
    size: 'large',
    color: 'black',
    placeholder: '',
    type: 'text',
  },
  {
    registerData: {},
    name: 'phone',
    label: 'Teléfono',
    size: 'large',
    color: 'black',
    placeholder: '',
    type: 'text',
  },
  {
    registerData: {},
    name: 'password',
    label: 'Contraseña',
    size: 'large',
    color: 'black',
    placeholder: '',
    type: 'password',
  },
]

// {
//   "id": 1607,
//   "firstname": "Fernanda",
//   "lastname": "rodriguez",
//   "dni": 4545545,
//   "email": "digitalmoneyf@gmail.com",
//   "phone": "3102716655"
// }

// la logica de para mapear los datos de el array al objeto de perfil array de formuario
// la key del objeto debe considir por el nombre del campo del formular si es asi se agrega el valor del objeto con el value del campo del formulario.

// formulario con vcampo dni sin valor

// export const profileForm = [
//     registerData: {},
//     name: 'dni',
//     label: 'CUIT',
//     size: 'large',
//     color: 'black',
//     placeholder: '',
//     type: 'text',
//   }
// ]

// // objeto de perfil

// {
//   "dni": 4545545,
// }

// // salida esperada formulario de perfil con el valor de dni

// export const profileForm = [
//   registerData: {},
//   name: 'dni',
//   label: 'CUIT',
//   size: 'large',
//   color: 'black',
//   placeholder: '',
//   type: 'text',
//   value: '4545545'
// }
// ]
