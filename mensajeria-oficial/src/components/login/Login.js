import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    try {
        const response = await axios.post('http://127.0.0.1:8081/auth/login', formData);
        const { access_token } = response.data;
        localStorage.setItem('token', access_token);
        setError('');
        navigate('/home'); // Redirigir a la página de inicio
    } catch (error) {
        setError('Usuario o contraseña incorrectos');
        console.error('Error al iniciar sesión:', error); // Agrega un console.error para ver el error en la consola
        if (error.response) {
            console.error('Respuesta del servidor:', error.response.data); // Mostrar detalles específicos del error del servidor
        }
    }
};

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="#" className="h1"><h2>Proyecto Mensajeria</h2></a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Iniciar Sesion</p>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Usuario" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Contraseña" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-7">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Recordar
                    </label>
                  </div>
                </div>
                <div className="col-5">
                  <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center mt-2 mb-3">
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Inicia Sesion con Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Inicia Sesion con Google+
              </a>
            </div>
            <p className="mb-1">
              <Link to="/confirm-email">Olvidé mi Contraseña</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
