export const inputs = [
  {
    name: 'number',
    placeholder: 'Número de tarjeta*',
    type: 'text',
    registerData: {
      required: 'El número de tarjeta es obligatorio',
      minLength: {value: 13, message: 'Debe tener al menos 13 dígitos'},
      maxLength: {value: 19, message: 'No puede tener más de 19 dígitos'},
      pattern: {value: /^[0-9]+$/, message: 'Solo números permitidos'},
    },
  },
  {
    name: 'name',
    placeholder: 'Nombre y apellido*',
    type: 'text',
    registerData: {
      required: 'El nombre es obligatorio',
      pattern: {value: /^[a-zA-Z\s]+$/, message: 'Solo letras y espacios'},
    },
  },
  {
    name: 'expiry',
    placeholder: 'MM/YY',
    type: 'text',
    inputMode: 'numeric', // Solo números en móviles
    maxLength: 4, // Limita a "MM/YY"
    autoComplete: 'cc-exp', // Autocompletar en navegadores
    registerData: {
      required: 'La fecha de vencimiento es obligatoria',
      pattern: {
        value: /^(0[1-9]|1[0-2])\/\d{2}$/,
        message: 'Formato MM/YY requerido',
      },
    },
  },
  {
    name: 'cvc',
    placeholder: 'Código de seguridad*',
    type: 'text',
    registerData: {
      required: 'El código de seguridad es obligatorio',
      minLength: {value: 3, message: 'Debe tener   3 o 4 dígitos'},
      maxLength: {value: 4, message: 'Debe tener 3 o 4 dígitos'},
      pattern: {value: /^[0-9]+$/, message: 'Solo números permitidos'},
    },
  },
]
