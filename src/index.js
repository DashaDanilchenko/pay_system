import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
          <App />
        
      </PersistGate> 
    </Provider>
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
