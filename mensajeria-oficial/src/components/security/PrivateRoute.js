// ./components/security/PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// const PrivateRoute = ({ roles, children }) => {
//   const token = localStorage.getItem('token');
//   const userRoles = decodeToken(token).roles; // Implementa decodeToken para obtener roles del token

//   // Verifica si el usuario tiene alguno de los roles permitidos
//   const isAuthorized = roles.some(role => userRoles.includes(role));

//   return isAuthorized ? children : <Navigate to="/login" />;
// };