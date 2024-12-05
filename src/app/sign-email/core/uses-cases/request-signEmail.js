export const requestSignEmail = (email, callBack) => {
  fetch('https://digitalmoney.digitalhouse.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email}), // Enviar solo el correo
  })
    .then(response => {
      if (!response.ok) {
        // Si la respuesta no es exitosa (no 2xx)
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
      return response.json() // Si la respuesta es exitosa, convertirla en JSON
    })
    .then(result => {
      console.log('Correo enviado correctamente:', result)
      callBack(result) // Ejecutar el callback con la respuesta de la API
    })
    .catch(error => {
      console.error('Detalles del error:', error)
    })
}
