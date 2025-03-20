import React from 'react';
import jQuery from 'jquery';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './stateManagement/store';

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

window.$ = jQuery;
const initialOptions = {
  clientId: "AYJZH5ClP0EHE2Ikctpbjzq8CO-SMq-ZxaiH3K6pZ1gf4I6cbtdniYCemoKOLmYuAoReoR1-RX_nTFls",
  // currency: "USD",
  // intent: "capture",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <PayPalScriptProvider
            options={initialOptions}
          >
            <App />
          </PayPalScriptProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    // Corremos este código si hay una nueva versión de nuestra app
    // Detalles en: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({type: "SKIP_WAITING"});
      // Des-registramos el SW para recargar la página y obtener la nueva versión. Lo cual permite que el navegador descargue lo nuevo y que invalida la cache que tenía previamente.
      window.location.reload();
    }
  },
});