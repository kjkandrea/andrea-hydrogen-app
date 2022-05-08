import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { sharedVariable } from '@frontend-clean-architecture/shopify-client'

console.log(sharedVariable);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
