import {create} from 'zustand'
import {signPasswordSlice} from '@domains/account/sign-password/data/slices/signPasswordSlice'

export const usePasswordStore = creat((...a) => ({
  ...signPasswordSlice(...a),
}))
