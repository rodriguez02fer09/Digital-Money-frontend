export const signEmailSlices = set => ({
  account: {
    email: null,
  },
  setAccount: newAccount => set(state => ({account: newAccount})),
})
