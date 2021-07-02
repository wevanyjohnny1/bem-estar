import React from 'react';
import ReactDOM from 'react-dom';
// import { createServer } from 'miragejs';
import { App } from './App';

// createServer({
//   routes() {
//     this.namespace = 'api';

//     this.get('/appointments', () => {
//       return [
//         {
//           id: 1,
//           type: 'online',
//           professional: 'Alberto',
//           date: '10/07/2021',
//           paymentType: 'Plano',
//           paymentMethod: 'cartão',
//           cardType: 'visa',
//           cardNumber: '111',
//           cardName: 'Joana',
//           cardV: '10/09/2029',
//           cardPass: '123',
//           name: 'Joana Albuquerque',
//         }
//       ]
//     })
//   }
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

