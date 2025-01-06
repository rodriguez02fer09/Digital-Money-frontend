const request = (data, callBack) => {
  const {path, data: dataRequest, method, addHeaders} = data
  fetch(`https://digitalmoney.digitalhouse.com/api/${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...addHeaders,
    },
    body: dataRequest ? JSON.stringify(dataRequest) : null,
  })
    .then(result => result.json())
    .then(result => {
      console.log('succes data', result)
      callBack(result)
    })
    .catch(error => {
      console.error('Detalles del error:', error)
    })
}

export default request
