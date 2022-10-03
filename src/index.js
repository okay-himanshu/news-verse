import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './context/Context';
import Routers from './routers/Routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <Routers>
      <App />
    </Routers>
  </Context>
);
