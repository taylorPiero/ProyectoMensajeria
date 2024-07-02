import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

const EditPerfile = ({ id, onClose, profiles }) => {
  const [perfileName, setPerfileName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      axios
        .get(`/perfiles/${id}`)
        .then(response => {
          setPerfileName(response.data.PR_Usu_perf_ch_nomb);
        })
        .catch(error =>
          console.error('Hubo un error al obtener el perfil!', error)
        );
    }
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();

    // Validar que no se repita el nombre
    if (perfilNameExists(perfileName)) {
      setError('Ya existe un perfil con este nombre agrega otro nombre');
      return;
    }

    axios
      .put(`http://127.0.0.1:8081/pi005TO1_perfil_update/${id}`, {
        PR_Usu_perf_ch_nomb: perfileName
      })
      .then(() => {
        onClose();
        setError('');
      })
      .catch(error =>
        console.error('Hubo un error al actualizar el perfil!', error)
      );
  };

  const perfilNameExists = name => {
    return profiles.some(profile => profile.PR_Usu_perf_ch_nomb === name);
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content card-primary card-outline modal-responsive">
          <div className="modal-header">
            <h5 className="modal-title">Editar Perfil</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre del Perfil</label>
                <input
                  type="text"
                  className="form-control"
                  value={perfileName}
                  onChange={e => setPerfileName(e.target.value)}
                  required
                />
                {error && <small className="text-danger">{error}</small>}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPerfile;
