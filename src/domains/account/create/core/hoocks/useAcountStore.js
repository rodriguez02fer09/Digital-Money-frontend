import {create} from 'zustand'

import {createAccountSlice} from '@domains/account/create/data/slices/createAccount.js'

export const useAcountStore = create((...a) => ({
  ...createAccountSlice(...a),
}))
