import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import ContactList from './components/contactos/ContactList';
import ContactForm from './components/contactos/ContactForm';
import ContactInactivo from './components/contactos/ContactInactivo';
import Compose from './components/Compose';
import EmailDetail from './components/EmailDetail';
import Home from './components/Home';
import Inbox from './components/Inbox';
import EventForm from './components/eventos/EventForm';
import EventList from './components/eventos/EventList';
import EventDetails from './components/eventos/EventDetails';
import SmsList from './components/sms/SmsList';
import SmsForm from './components/sms/SmsForm';
import SendSMS from './components/sms/SendSMS';
import Login from './components/login/Login';
import Register from './components/login/Register';
import ConfirmEmail from './components/login/ConfirmEmail';
import ConfirmPassword from './components/login/ConfirmPassword';
import PrivateRoute from './components/security/PrivateRoute';
import AddUser from './components/usuarios/AddUser';
import UserList from './components/usuarios/UserList';
import EditUser from './components/usuarios/EditUser';
import RoleList from './components/roles/RoleList';
import AddRole from './components/roles/AddRole';
import EditRole from './components/roles/EditRole';
import AddPerfile from './components/perfiles/AddPerfile';
import EditPerfile from './components/perfiles/EditPerfile';
import PerfileList from './components/perfiles/PerfileList';
import InactiveUser from './components/usuarios/InactiveUser';
import GroupList from './components/grupos/GroupList';
import AddGroup from './components/grupos/AddGroup';
import EditGroup from './components/grupos/EditGroup';
import SendWhats from './components/whatsapp/SendWhats';
// import SendWsp from './components/whatsapp/SendWsp';


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
  // const rol= 'supervisor'
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
          {/* {rol==='supervisor'?
          <Route path="/sendSMS" element={<PrivateRoute><SendSMS /></PrivateRoute>} />:<></>
          } */}
          <Route path="/*" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/contacts" element={<PrivateRoute><ContactList /></PrivateRoute>} />
          <Route path="/contacts/add" element={<PrivateRoute><ContactForm /></PrivateRoute>} />
          <Route path="/contacts/edit/:id" element={<PrivateRoute><ContactForm /></PrivateRoute>} />
          <Route path="/contactinactivos" element={<PrivateRoute><ContactInactivo/></PrivateRoute>} />
          <Route path="/inactiveUser" element={<PrivateRoute><InactiveUser/></PrivateRoute>} />
          <Route path="/sendSMS" element={<PrivateRoute><SendSMS /></PrivateRoute>} />
          {/* <Route path="/sendWsp" element={<PrivateRoute><SendWsp /></PrivateRoute>} /> */}
          <Route path="/sendWhats" element={<PrivateRoute><SendWhats /></PrivateRoute>} />
          <Route path="/smsList" element={<PrivateRoute><SmsList /></PrivateRoute>} />
          <Route path="/smsForm" element={<PrivateRoute><SmsForm /></PrivateRoute>} />
          <Route path="/grupos" element={<PrivateRoute><GroupList/></PrivateRoute>}/>
          <Route path="/grupos/add" element={<PrivateRoute><AddGroup/></PrivateRoute>} />
          <Route path="/grupos/edit/:id" element={<PrivateRoute><EditGroup/></PrivateRoute>} />
          <Route path="/roleList" element={<PrivateRoute><RoleList/></PrivateRoute>}/>
          <Route path="/addRole" element={<PrivateRoute><AddRole/></PrivateRoute>}/>
          <Route path="/editRole" element={<PrivateRoute><EditRole/></PrivateRoute>}/>
          <Route path="/addPerfile" element={<PrivateRoute><AddPerfile/></PrivateRoute>}/>
          <Route path="/editPerfile" element={<PrivateRoute><EditPerfile/></PrivateRoute>}/>
          <Route path="/perfileList" element={<PrivateRoute><PerfileList/></PrivateRoute>}/>   
          <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
          <Route path="/users/add" element={<PrivateRoute><AddUser /></PrivateRoute>} />
          <Route path="/users/edit/:id" element={<PrivateRoute><EditUser /></PrivateRoute>} />
          <Route path="/inbox" element={<PrivateRoute><Inbox /></PrivateRoute>} />
          <Route path="/compose" element={<PrivateRoute><Compose /></PrivateRoute>} />
          <Route path="/email" element={<PrivateRoute><EmailDetail /></PrivateRoute>} />
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
