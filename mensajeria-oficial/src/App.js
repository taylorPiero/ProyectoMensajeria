import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Compose from './components/Compose';
import EmailDetail from './components/EmailDetail';
import Chat from './components/whatsapp/Chat';
import Groups from './components/whatsapp/Groups';
import Others from './components/whatsapp/Others';
import Home from './components/Home';
import Inbox from './components/Inbox';
import EventForm from './components/eventos/EventForm';
import EventList from './components/eventos/EventList';
import EventDetails from './components/eventos/EventDetails';
import SmsList from './components/sms/SmsList';
import Login from './components/login/Login';
import Register from './components/login/Register';
import ConfirmEmail from './components/login/ConfirmEmail';
import ConfirmPassword from './components/login/ConfirmPassword';
import PrivateRoute from './components/security/PrivateRoute';
import AddUser from './components/usuarios/AddUser';
import UserList from './components/usuarios/UserList';
import EditUser from './components/usuarios/EditUser';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <Router>
      <AppContent setToken={setToken} />
    </Router>
  );
}

function AppContent({ setToken }) {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith('/login') || location.pathname.startsWith('/register') || location.pathname.startsWith('/confirm');

  return (
    <div className={`wrapper ${isAuthPage ? 'auth-page' : ''}`}>
      {!isAuthPage && <Header />}
      {!isAuthPage && <Menu />}
      <div className="content-wrapper">
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />

          {/* Protected Routes */}
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/contacts" element={<PrivateRoute><ContactList /></PrivateRoute>} />
          <Route path="/contacts/add" element={<PrivateRoute><ContactForm /></PrivateRoute>} />
          <Route path="/contacts/edit/:id" element={<PrivateRoute><ContactForm /></PrivateRoute>} />
          <Route path="/sms/SmsList" element={<PrivateRoute><SmsList /></PrivateRoute>} />
          <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
          <Route path="/users/add" element={<PrivateRoute><AddUser /></PrivateRoute>} />
          <Route path="/users/edit/:id" element={<PrivateRoute><EditUser /></PrivateRoute>} />
          <Route path="/inbox" element={<PrivateRoute><Inbox /></PrivateRoute>} />
          <Route path="/compose" element={<PrivateRoute><Compose /></PrivateRoute>} />
          <Route path="/email" element={<PrivateRoute><EmailDetail /></PrivateRoute>} />
          <Route path="/whatsapp/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
          <Route path="/whatsapp/groups" element={<PrivateRoute><Groups /></PrivateRoute>} />
          <Route path="/whatsapp/others" element={<PrivateRoute><Others /></PrivateRoute>} />
          <Route path="/eventos" element={<PrivateRoute><EventList /></PrivateRoute>} />
          <Route path="/eventos/create" element={<PrivateRoute><EventForm /></PrivateRoute>} />
          <Route path="/eventos/:id" element={<PrivateRoute><EventDetails /></PrivateRoute>} />

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
