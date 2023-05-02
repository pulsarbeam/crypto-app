import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import { Routes, Route } from '../routes'
import Home from './routes/Home'
import Signin from './routes/Signin'
import Signout from './routes/Signout'
import Account from './routes/Account'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
