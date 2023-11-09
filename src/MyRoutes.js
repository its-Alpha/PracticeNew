import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Layouts from './Components/Layouts'


const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts/>}>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />

        </Route>

      </Routes>
    </Router>
  )
}

export default MyRoutes