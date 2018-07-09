import './style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App title="React Webpack boiler plate with Jake" />
  </BrowserRouter>,
  document.getElementById('app-react-root')
)
