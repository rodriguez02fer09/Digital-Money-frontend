import {create} from 'zustand'

import {signEmailSlices} from '../../data/slices/signEmailSlices'

export const useSingEmail = create((...a) => ({
  ...signEmailSlices(...a),
}))
