import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';

import Products from './pages/products';
import MainView from './pages/main-view/index';
import Join from './pages/join-us/index';
import Login from './pages/join-us/login/index';
import Submission from './pages/join-us/submission/index';
import Activity from '@/pages/activity';
import Register from './pages/join-us/register/index';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index element={<MainView />} />
        <Route path="products" element={<Products />} />
        <Route path="join" element={<Join />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="submission" element={<Submission />} />
        <Route path="activity" element={<Activity />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
