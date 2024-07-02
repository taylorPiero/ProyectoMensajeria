import React, { useState } from 'react';
import axios from '../../api/axios';

const AddPerfile = ({ onClose, profiles }) => {
  const [perfileName, setPerfileName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // Validar que no se repita el nombre
    if (perfilNameExists(perfileName)) {
      setError('Ya existe un perfil con este nombre.');
      return;
    }

    axios.post('http://127.0.0.1:8081/pi003TO1_perfil_add', {
      PR_Usu_perf_ch_nomb: perfileName
    })
      .then(() => {
        onClose();
        setError('');
      })
      .catch(error => console.error('Hubo un error al agregar el perfil!', error));
  };

  const perfilNameExists = name => {
    return profiles.some(profile => profile.PR_Usu_perf_ch_nomb === name);
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content card-primary card-outline modal-responsive">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Perfil</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre del Perfil</label>
                <input type="text" className="form-control" value={perfileName} onChange={(e) => setPerfileName(e.target.value)} required />
                {error && <small className="text-danger">{error}</small>}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPerfile;
