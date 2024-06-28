import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConfirmEmail = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Utilizar useNavigate para navegación programática

  const handleEmailConfirm = (event) => {
    event.preventDefault();
    // Lógica para confirmar el email
    // Simulación de confirmación de email
    console.log(`Email confirmado: ${email}`);

    // Redirigir a la página de confirmación de contraseña
    navigate('/confirm-password');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="/login" className="h1"><h2> Proyecto Mensajeria </h2></a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">¿Olvidaste tu contraseña? Aquí puede recuperar fácilmente una nueva contraseña.</p>
            <form onSubmit={handleEmailConfirm}>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">nueva contraseña</button>
                </div>
              </div>
            </form>
            <p className="mt-3 mb-1">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
