import React, { Component } from 'react';
import './App.css';
import {  BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from './pages/Auth/auth';

const App = () => {
  return(
    <div className='App'>
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


