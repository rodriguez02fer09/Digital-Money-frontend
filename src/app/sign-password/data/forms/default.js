export const passwordForm = [
  {
    registerData: {
      required: 'La contraseña es requerida',
      pattern: {
        // value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
        message:
          'La contraseña debe tener al menos 8 caracteres, incluir una letra y un número',
      },
    },
    name: 'password',
    size: 'large',
    color: 'black',
    placeholder: 'Contraseña*',
    type: 'password',
  },
]
