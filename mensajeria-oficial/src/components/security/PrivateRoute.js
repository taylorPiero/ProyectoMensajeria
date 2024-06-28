// ./components/security/PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Verifica la autenticación como mejor se adapte a tu aplicación

//   return isAuthenticated ? (
//     <Route {...rest} element={<Element />} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default PrivateRoute;



// ConfirEmail
// ConfirPassword
// Login
// Register
// PrivateRoute
// ProtectedRoute