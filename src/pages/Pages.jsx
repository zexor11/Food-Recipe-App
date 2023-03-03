import React from 'react'
import Home from './Home';
import Cuisine from '../Cuisine';
import { Route, Routes } from "react-router-dom";
import Searched from '../Searched';
import Recipe from '../Recipe';

const Pages = () => {
  return (
    
    <Routes>
      <Route path="/" and element={<Home />} />
      <Route path="/cuisine/:type" and element={<Cuisine />} />
      <Route path="/searched/:search" and element={<Searched />} />
      <Route path="/recipe/:name" and element={<Recipe />} />

      </Routes>
      
  )
}

export default Pages;
