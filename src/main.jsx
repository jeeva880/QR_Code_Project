import React from 'react';
import ReactDOM from 'react-dom/client';
import { QrCode } from './QrCode';
import "./Qrcode.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QrCode/>
  </React.StrictMode>,
)
