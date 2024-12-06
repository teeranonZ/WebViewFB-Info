import React from 'react';
import ReactDOM from 'react-dom/client'; // ใช้ 'react-dom/client' แทน
import App from './App';

// ค้นหา root element
const rootElement = document.getElementById('root');

// ใช้ createRoot แทน render
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
