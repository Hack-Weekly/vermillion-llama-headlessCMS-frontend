import React, { Component } from 'react';
import './App.css';
import './pages/Auth/auth.css';
import {  BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth/auth';

const App = () => {
  return(
    <div className='auth'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth/>} />
          {/* <Route path='/home' element={<Home/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


