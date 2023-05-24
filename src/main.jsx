import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { NumContextProvider } from './context/numIndex.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NumContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NumContextProvider>
  </React.StrictMode>,
)
