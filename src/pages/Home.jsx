import React from 'react'
import { Info } from '../components/info'
import { InfoCards } from '../components/InfoCards'
import fondoIMG from '../assets/fondoINFO.png'
import NavBar from '../layout/NavBar'

export const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${fondoIMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <NavBar />
      <Info noBg /> {/* Pasa una prop para que Info no repita el fondo */}
      <InfoCards />
    </div>
  )
}
