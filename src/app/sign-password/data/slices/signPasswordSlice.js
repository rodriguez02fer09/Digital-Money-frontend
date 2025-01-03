export const signPasswordSlice = set => ({
  password: null,
  setPassword: password => set(state => ({...state, password})),
})
