import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ตรวจสอบว่ามีไฟล์ App.js อยู่ในตำแหน่งนี้

// ตรวจสอบว่ามี element ที่มี id="root" อยู่ในไฟล์ index.html
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Target container is not a DOM element. Check your index.html file.");
}
