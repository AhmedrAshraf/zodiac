import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.createRoot(document.getElementById('root')).render(<App />);

serviceWorker.unregister();
