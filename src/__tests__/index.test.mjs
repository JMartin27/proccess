// eslint-disable-next-line import/no-extraneous-dependencies
import {
    describe as myDescribe, test as myTest, expect as myExpect, request as myRequest,
  } from '@jest/globals';
  import myApp from '../index.mjs'; 
  
  myDescribe('My Express App Tests', () => {
    // Prueba para la ruta raíz '/'
    myTest('GET /root debe devolver un archivo HTML', async () => {
      const myResponse = await myRequest(myApp).get('/');
      myExpect(myResponse.statusCode).toBe(200);
      myExpect(myResponse.text).toContain('index.html'); 
    });
  
    // Prueba para la ruta '/images/:id'
    myTest('GET /images/:id debe devolver un documento', async () => {
      const myId = '123';
      const myResponse = await myRequest(myApp).get(`/images/${myId}`);
      myExpect(myResponse.statusCode).toBe(200);
      myExpect(myResponse.body).toEqual(myExpect.objectContaining({ _id: myId }));
    });
  
    // Prueba para manejo de errores
    myTest('Manejo de errores debe funcionar correctamente', async () => {
      const myResponse = await myRequest(myApp).get('/una-ruta-que-no-existe');
      myExpect(myResponse.statusCode).toBe(404);
      myExpect(myResponse.body.message).toBe('Ruta no encontrada');
    });
  });