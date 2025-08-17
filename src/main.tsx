import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import Products from './pages/products';
// import MainView from './pages/main-view/index';
import Join from './pages/join-us/index';
import Activity from '@/pages/activity';
import About from './pages/main-view/components/about/index';
import View from './pages/main-view/components/double-layer/index';
import MainView from './pages/main-view/index';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route index element={<View />} />
          <Route path="products" element={<Products />} />
          <Route path="join" element={<Join />} />
          <Route path="activity" element={<Activity />} />
          <Route path="about" element={<About />} />
          <Route path="mainview" element={<MainView />} />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </HelmetProvider>,
);
