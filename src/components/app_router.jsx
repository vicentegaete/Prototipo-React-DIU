import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Login from '../components/login'
import Mostrar from './mostrar'
import RespuestaPage from '../pages/respuesta'
import InformesPage from '../pages/informes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<Login />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/mostrar' element={<Mostrar />} />
        <Route path='/respuesta' element={<RespuestaPage />} />
        <Route path='/informes' element={<InformesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
