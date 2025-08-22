import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy load page components for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const MatthewsNC = React.lazy(() => import('./pages/MatthewsNC'));
const HollywoodFL = React.lazy(() => import('./pages/HollywoodFL'));
const DOTInspectionRequirements = React.lazy(() => import('./pages/DOTInspectionRequirements'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matthews-nc" element={<MatthewsNC />} />
          <Route path="/hollywood-fl" element={<HollywoodFL />} />
          <Route path="/dot-inspection-requirements" element={<DOTInspectionRequirements />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
