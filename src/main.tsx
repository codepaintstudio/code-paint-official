import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';

import Products from './pages/products';
import MainView from '@/pages/main-view';
import Join from './pages/join_us/index';
import Login from './pages/join_us/Login';
import Submission from './pages/join_us/Submisstion';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index element={<MainView />} />
        <Route path="products" element={<Products />} />
        <Route path="join" element={<Join />} />
        <Route path="login" element={<Login />} />
        <Route path="submission" element={<Submission />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
