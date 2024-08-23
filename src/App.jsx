import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Header from './components/header/header';
import Footer from './components/footer/footer.jsx';
import Home from './pages/homepage/home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <Home />
      <Footer />
   
    </>
  )
}

export default App
