import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router';
import './index.css';
import App from './App.tsx';
import Products from './pages/products';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index element={<App />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
