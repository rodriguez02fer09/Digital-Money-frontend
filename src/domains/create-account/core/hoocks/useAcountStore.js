import {create} from 'zustand'

import {createAccountSlice} from '../../data/slices/createAccount.js'

export const useAcountStore = create((...a) => ({
  ...createAccountSlice(...a),
}))
