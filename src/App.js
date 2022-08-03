import React from 'react'
import Cardss from './Cards/Cardss.js'
import Header from './Cards/Header.js'
import Signin from './Cards/Signin/Signin.js'
import Cart from './Cards/Cart/Cart.js'
import Home from './Cards/Home/Home.js'
import {Routes,Route } from "react-router-dom"
function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path='/Cardss' element={<Cardss />} />
    <Route path='/Signin' element={<Signin />} />
    </Routes>
    </>
  )
}

export default App
