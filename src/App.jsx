import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
