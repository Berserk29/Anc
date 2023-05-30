import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { NumContextProvider } from './context/numIndex.context.jsx'
import { ProductsProvider } from './context/products.context.jsx'
import { CartProvider } from './context/cart.context.jsx'
import { LikedProvider } from './context/liked.context.jsx'
import { OrderProvider } from './context/order.context.jsx'

import ScrollToTop from './helper/scrollToTop.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NumContextProvider>
        <ProductsProvider>
          <OrderProvider>
            <CartProvider>
            <LikedProvider>
              <ScrollToTop />
              <App />
            </LikedProvider>
            </CartProvider>
          </OrderProvider>
        </ProductsProvider>
      </NumContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
