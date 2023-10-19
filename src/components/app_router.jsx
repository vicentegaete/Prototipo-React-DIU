import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Login from '../components/login'
import Mostrar from './mostrar'
import RespuestaPage from '../pages/respuesta'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<Login />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/mostrar' element={<Mostrar />} />
        <Route path='/respuesta' element={<RespuestaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
