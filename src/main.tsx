import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router';
import './index.css';

import Products from './pages/products';
import MainView from '@/pages/main-view';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index element={<MainView />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
