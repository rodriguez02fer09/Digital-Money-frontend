export const passwordForm = [
  {
    registerData: {
      required: 'La contraseña es requerida',
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, // Ejemplo: Mínimo 8 caracteres, al menos 1 letra y 1 número
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
