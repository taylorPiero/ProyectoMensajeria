import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

const EditRole = ({ id, onClose, roles }) => {
  const [roleName, setRoleName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8081/roles/${id}`)
        .then(response => setRoleName(response.data.PR_Usu_rol_ch_nomb))
        .catch(error =>
          console.error('Hubo un error al obtener los detalles del rol!', error)
        );
    }
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();

    // Validar que no se repita el nombre
    if (roleNameExists(roleName)) {
      setError('Ya existe un rol con este nombre.');
      return;
    }

    axios
      .put(`http://127.0.0.1:8081/pi005TO1_rol_update/${id}`, {
        PR_Usu_rol_ch_nomb: roleName
      })
      .then(() => onClose())
      .catch(error =>
        console.error('Hubo un error al actualizar el rol!', error)
      );
  };

  const roleNameExists = name => {
    return roles.some(role => role.PR_Usu_rol_ch_nomb === name);
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content card-primary card-outline modal-responsive">
          <div className="modal-header">
            <h5 className="modal-title">Editar Rol</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre del Rol</label>
                <input
                  type="text"
                  className="form-control"
                  value={roleName}
                  onChange={e => setRoleName(e.target.value)}
                  required
                />
                {error && <small className="text-danger">{error}</small>}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
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

export default EditRole;
