export const signEmailSlice = set => ({
  email: null, // Estado inicial del email
  setEmail: email => set(state => ({...state, email})), // Actualización del estado
})
