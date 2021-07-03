import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    user: Model,
  },

  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: 1,
          name: 'Johnny',
          contact: 'gmail',
          plan: 'hapvida',
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/users', () => {
      return this.schema.all('user')
    })

    this.post('/users', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('user', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);