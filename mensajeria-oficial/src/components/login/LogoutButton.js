// Componente en React donde se maneja el logout
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/auth/logout'); 
      localStorage.removeItem('token'); // Limpia el token almacenado 
      history.push('/login'); // Redirige a la página de inicio de sesión u otra página deseada
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      
    }
  };

  return (
    <button onClick={handleLogout}>Cerrar sesión</button>
  );
};

export default LogoutButton;
