import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BuildClient from '@frontend-clean-architecture/shopify-client';

export const client = BuildClient({
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
  domain: 'graphql.myshopify.com',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
