export const requestCreateAccount = (account, callBack) => {
  fetch('https://digitalmoney.digitalhouse.com/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(account),
  })
    .then(result => result.json())
    .then(result => {
      console.log('Usuario registrado con éxito:', result)
      callBack()
      router.push('/successful-register')
    })
    .catch(error => {
      console.error('Detalles del error:', error)
    })
}
