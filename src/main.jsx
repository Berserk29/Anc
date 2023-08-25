import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { NumContextProvider } from './context/numIndex.context.jsx'
import { ProductsProvider } from './context/products.context.jsx'
import { CartProvider } from './context/cart.context.jsx'
import { LikedProvider } from './context/liked.context.jsx'
import { OrderProvider } from './context/order.context.jsx'
import { UserProvider } from './context/user.context.jsx';
import GlobalStyles from './globalStyles.js'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './routes/errorPage/errorPage.component.jsx'

import ScrollToTop from './helper/scrollToTop.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <GlobalStyles/>
      <BrowserRouter>
        <UserProvider>
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
        </UserProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
