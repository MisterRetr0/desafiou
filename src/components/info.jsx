import React from "react";
import "../styles/info.css";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const Info = ({ noBg }) => {
  return (
    <div
      className="info-hero-bg"
      style={
        noBg
          ? {}
          : {
              backgroundImage: `url(${require("../assets/fondoINFO.png")})`,
              backgroundSize: "80%", // <-- Aleja la imagen (más pequeña)
              backgroundPosition: "center top", // Puedes ajustar según prefieras
              backgroundRepeat: "no-repeat",
              paddingTop: "4rem",   // Más espacio arriba
              paddingBottom: "4rem" // Más espacio abajo
            }
      }
    >
      <div className="info-hero-content">
        <h2 className="info-hero-title">OPTATECHNOLOGY</h2>
        <h1 className="info-hero-subtitle">Prepárate para el futuro</h1>
        <button className="info-hero-btn">COMIENZA AQUI</button>
        <div className="info-hero-social">
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};