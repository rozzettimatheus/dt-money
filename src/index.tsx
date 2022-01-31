import React from 'react'
import ReactDOM from 'react-dom'

import { makeServer } from './services/miragejs/server'
import { App } from './App'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
