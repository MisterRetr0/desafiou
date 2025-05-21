import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import '../styles/FormLogin.css';

export const FormLogin = () => {
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
        <h2>Bienvenido de nuevo</h2>
        <div className="form-group">
          <label>Usuario</label>
          <div className="input-container">
            <FaUser className="input-icon" />
            <input type="text" name="username" required />
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
          Iniciar Sesión
        </button>
        <p className="register-text">
          ¿Aún no tienes una cuenta?
          <br />
          <a href="/register">Registrate</a>
        </p>
      </form>
    </div>
  );
};