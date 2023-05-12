import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

import reportWebVitals from './reportWebVitals';
import {SignIn, SignUp} from "./views";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SignUp/>
  </React.StrictMode>
);

reportWebVitals();
