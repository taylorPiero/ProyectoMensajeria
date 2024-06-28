import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './Login.css'; // Reutilizar el mismo archivo CSS para estilos consistentes

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para registrar al usuario
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Registrar una nueva membresía</p>
            <form onSubmit={handleRegister}>
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Full name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
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
                  placeholder="Retype password" 
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input 
                      type="checkbox" 
                      id="agreeTerms" 
                      name="terms" 
                      value="agree"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    <label htmlFor="agreeTerms">
                      Acepto los <a href="#">Terminos</a>
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center">
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i>
                Inicia Sesion con Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i>
                Inicia Sesion con Google+
              </a>
            </div>
            <p className="mb-0">
              <Link to="/login/login" className="text-center">ya tengo una membresia</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
