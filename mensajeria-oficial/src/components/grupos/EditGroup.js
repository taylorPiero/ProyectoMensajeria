import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'; // Asegúrate de que la ruta es correcta
import { useNavigate, useParams } from 'react-router-dom';

const EditGroup = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const response = await axios.get(`/grupos_list_id?id=${id}`);
                setName(response.data.name);
            } catch (error) {
                console.error('Error al obtener el grupo', error);
            }
        };

        fetchGroup();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/grupos_update?id=${id}`, { name });
            navigate('/grupos'); // Navega a la lista de grupos después de editar uno
        } catch (error) {
            console.error('Error al actualizar el grupo', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Editar Grupo</h2>
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
                                <button type="submit" className="btn btn-primary btn-block">Actualizar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditGroup;
