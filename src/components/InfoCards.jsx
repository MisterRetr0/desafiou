import React from "react";
import "../styles/infoCards.css";
import { FaEye, FaDatabase, FaChartLine } from "react-icons/fa";

export const InfoCards = () => (
  <div className="info-cards-container">
    <div className="info-cards-inner">
      <div className="info-cards-header">
        <div className="info-cards-title-row">
          <FaEye className="info-cards-logo" />
          <h1>
            <span className="bold">OPTA</span>
            <span className="blue">TECHNOLOGY</span>
          </h1>
        </div>
        <p className="info-cards-desc">
          Transformando la oftalmología a través de la inteligencia artificial
        </p>
        <h2 className="info-cards-highlight">
          Presentamos a <span className="blue">Octopus</span>
        </h2>
        <p className="info-cards-subdesc">
          Un asistente virtual basado en IA diseñado para revolucionar los
          procesos médicos en oftalmología mediante pre-diagnósticos, recolección
          de datos y análisis médicos inteligentes.
        </p>
      </div>
      <div className="info-cards-row">
        <div className="info-card">
          <FaEye className="info-card-icon" />
          <h3>Pre-diagnósticos avanzados</h3>
          <p>
            Análisis preliminar rápido y preciso de condiciones oftalmológicas.
          </p>
        </div>
        <div className="info-card">
          <FaDatabase className="info-card-icon" />
          <h3>Gestión inteligente de datos</h3>
          <p>Recolección y organización eficiente de antecedentes médicos.</p>
        </div>
        <div className="info-card">
          <FaChartLine className="info-card-icon" />
          <h3>Optimización de procesos</h3>
          <p>Reducción de tiempos y mejora en la precisión diagnóstica.</p>
        </div>
      </div>
    </div>
  </div>
);