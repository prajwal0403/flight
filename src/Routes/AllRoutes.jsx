import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import NotFoundRoute from '../components/NotFoundRoute'

export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFoundRoute/>}/>
    </Routes>
    </>
  )
}
