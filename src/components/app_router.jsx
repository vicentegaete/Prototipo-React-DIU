import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import RespuestaPage from '../pages/respuesta'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/respuesta' element={<RespuestaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
