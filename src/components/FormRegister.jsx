import { useState } from 'react';
import '../styles/FormLogin.css';

export const FormRegister = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Aquí podrías manejar la lógica local si lo necesitas
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Crea una Cuenta</h2>
        <div className="form-group">
          <label>Nombre</label>
          <div className="input-container">
            <FaUser className="input-icon" />
            <input type="text" name="nombre" required />
          </div>
        </div>
        <div className="form-group">
          <label>Usuario</label>
          <div className="input-container">
            <FaUser className="input-icon" />
            <input type="text" name="username" required />
          </div>
        </div>
        <div className="form-group">
          <label>Correo electrónico</label>
          <div className="input-container">
            <FaEnvelope className="input-icon" />
            <input type="email" name="email" required />
          </div>
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <div className="input-container">
            <FaLock className="input-icon" />
            <input type="password" name="password" required />
          </div>
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          Registrarse
        </button>
        <p className="register-text">
          Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a>
        </p>
      </form>
    </div>
  );
};