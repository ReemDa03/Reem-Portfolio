// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import HomePage from './Pages/Home/Home';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        {/* كل الأقسام بنفس الصفحة */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
