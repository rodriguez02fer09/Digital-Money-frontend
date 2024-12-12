export const requestSignPassword = (data, callBack) => {
  console.log('Datos enviados a la API:', data);

  fetch('https://digitalmoney.digitalhouse.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Asegúrate de enviar email y password correctamente
  })
    .then((response) => {
      console.log('Estado de la respuesta:', response.status);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log('Respuesta del servidor:', result);
      callBack({ success: true, data: result });
    })
    .catch((error) => {
      console.error('Error al contactar el servidor:', error);
      callBack({ success: false, error: error.message });
    });
};
