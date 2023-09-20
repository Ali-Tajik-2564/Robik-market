import React from 'react'
import { useRoutes, Link } from "react-router-dom"
import './App.css'
import TopBar from './component/TopBar/TopBar'
import routes from './router'
import MainHeaders from './component/mainHeader/MainHeaders'
import Footer from './component/Footer/Footer'

function App() {
  const route = useRoutes(routes)

  return (
    <>

      <TopBar />
      <MainHeaders />
      {route}

      <Footer />
    </>
  )
}

export default App
