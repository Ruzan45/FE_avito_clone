import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';
import './css/font-awesome.min.css';
import './scss/main.scss';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    </>
    
  );
}

export default App;
