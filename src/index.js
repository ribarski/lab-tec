import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Timeline" element={<Timeline />} />       
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
