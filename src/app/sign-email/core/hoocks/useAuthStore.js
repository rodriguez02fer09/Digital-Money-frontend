import {create} from 'zustand'
import {signEmailSlice} from '../../data/slices/signEmailSlices'

export const useAuthStore = create((...a) => ({
  ...signEmailSlice(...a),
}))
