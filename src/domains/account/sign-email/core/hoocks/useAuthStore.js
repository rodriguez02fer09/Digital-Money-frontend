import {create} from 'zustand'
import {signEmailSlice} from '@domains/account/sign-email/data/slices/signEmailSlices'

export const useAuthStore = create((...a) => ({
  ...signEmailSlice(...a),
}))
