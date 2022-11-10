import React from 'react';
import Food from './Components/Food';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Food />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
