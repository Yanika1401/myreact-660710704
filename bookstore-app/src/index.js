import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import App from './App';
//import './styles/global.css';
//import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// สร้าง root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render แอปพลิเคชัน
root.render(
  <React.StrictMode>
    {/* BrowserRouter ครอบ App เพื่อเปิดใช้งาน routing ทั่วทั้งแอป */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
