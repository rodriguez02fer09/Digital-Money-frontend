export const signPasswordSlice = set =>({
import { passwordForm } from '../forms/default';
  password: null,
  setPassword : password => set (state => ({...state, password}))
})