import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { NumContextProvider } from './context/numIndex.context.jsx'
import { ProductsProvider } from './context/products.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NumContextProvider>
        <ProductsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductsProvider>
      </NumContextProvider>
  </React.StrictMode>,
)
