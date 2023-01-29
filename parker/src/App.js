import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BlankLayout from './layouts/blank/BlankLayout';
import FullLayout from './layouts/full/FullLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BlankLayout />} />
      <Route path="secured" element={<FullLayout />} />
    </Routes>
  )
}

export default App;