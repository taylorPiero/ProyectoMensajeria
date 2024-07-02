import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import AddRole from './AddRole';
import EditRole from './EditRole';

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [showAddRoleModal, setShowAddRoleModal] = useState(false);
  const [showEditRoleModal, setShowEditRoleModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = () => {
    axios
      .get('http://127.0.0.1:8081/roles_listget')
      .then(response => setRoles(response.data))
      .catch(error => console.error('Hubo un error al obtener los roles!', error));
  };

  const openAddRoleModal = () => setShowAddRoleModal(true);
  const closeAddRoleModal = () => {
    setShowAddRoleModal(false);
    fetchRoles();
  };

  const openEditRoleModal = id => {
    setSelectedRoleId(id);
    setShowEditRoleModal(true);
  };

  const closeEditRoleModal = () => {
    setSelectedRoleId(null);
    setShowEditRoleModal(false);
    fetchRoles();
  };

  const openDeleteModal = id => {
    setSelectedRoleId(id);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedRoleId(null);
    setShowDeleteModal(false);
  };
  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:8081/roles/${selectedRoleId}`)
      .then(() => {
        fetchRoles();
        closeDeleteModal();
      })
      .catch(error => console.error('Hubo un error al eliminar el rol!', error));
  };

  return (
    <div className="container">
      <h2>Lista de Roles</h2>
      <button onClick={openAddRoleModal} className="btn btn-primary mb-3">
        Nuevo Rol
      </button>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>    </th>
            <th>Nombre del Rol</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.PR_Usu_rol_id}>
              <td>{role.PR_Usu_rol_id}</td>
              <td>{role.PR_Usu_rol_ch_nomb}</td>
              <td>
                <button
                  onClick={() => openEditRoleModal(role.PR_Usu_rol_id)}
                  className="btn btn-warning btn-sm mr-2"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  onClick={() => openDeleteModal(role.PR_Usu_rol_id)}
                  className="btn btn-danger btn-sm"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDeleteModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Eliminación</h5>
                <button type="button" className="close" onClick={closeDeleteModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que deseas eliminar este rol?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeDeleteModal}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddRoleModal && <AddRole onClose={closeAddRoleModal} roles={roles} />}
      {showEditRoleModal && <EditRole id={selectedRoleId} onClose={closeEditRoleModal} roles={roles} />}
    </div>
  );
};

export default RoleList;
