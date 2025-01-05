import {create} from 'zustand'
import {signPasswordSlice} from '../../../data/slices/signPasswordSlice'

export const usePasswordStore = creat((...a) => ({
  ...signPasswordSlice(...a),
}))
