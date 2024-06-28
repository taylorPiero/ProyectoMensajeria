import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConfirmPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para cambiar la contraseña
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="/login" className="h1"><h2> Proyecto Mensajeria </h2></a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Estás a sólo un paso de tu nueva contraseña, recupera tu contraseña ahora.</p>
            <form onSubmit={handleChangePassword}>
              <div className="input-group mb-3">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Confirmar Password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">Cambiar la contraseña</button>
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

export default ConfirmPassword;
