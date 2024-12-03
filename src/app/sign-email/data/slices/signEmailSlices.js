export const signEmailStore = set => ({
  email: null,

  setEmail: email =>
    set(state => ({ {...state.email, email}})), // Se asegura de mantener el estado anterior y solo actualizar la propiedad necesaria
})
