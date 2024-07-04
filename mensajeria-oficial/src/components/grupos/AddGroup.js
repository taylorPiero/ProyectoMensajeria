import React, { useState } from 'react';
import axios from '../../api/axios'; // Asegúrate de que la ruta es correcta
import { useNavigate } from 'react-router-dom';

const AddGroup = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/grupos_add', { name });
            navigate('/grupos'); // Navega a la lista de grupos después de agregar uno nuevo
        } catch (error) {
            console.error('Error al agregar el grupo', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Agregar Grupo</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Agregar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddGroup;
