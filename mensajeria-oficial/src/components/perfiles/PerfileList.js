import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import AddPerfile from './AddPerfile';
import EditPerfile from './EditPerfile';

const PerfileList = () => {
  const [perfiles, setPerfiles] = useState([]);
  const [selectedPerfileId, setSelectedPerfileId] = useState(null);
  const [showAddPerfileModal, setShowAddPerfileModal] = useState(false);
  const [showEditPerfileModal, setShowEditPerfileModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetchPerfiles();
  }, []);

  const fetchPerfiles = () => {
    axios
      .get('http://127.0.0.1:8081/perfil_listget')
      .then(response => setPerfiles(response.data))
      .catch(error =>
        console.error('Hubo un error al obtener los perfiles!', error)
      );
  };

  const openAddPerfileModal = () => setShowAddPerfileModal(true);
  const closeAddPerfileModal = () => {
    setShowAddPerfileModal(false);
    fetchPerfiles();
  };

  const openEditPerfileModal = id => {
    setSelectedPerfileId(id);
    setShowEditPerfileModal(true);
  };

  const closeEditPerfileModal = () => {
    setSelectedPerfileId(null);
    setShowEditPerfileModal(false);
    fetchPerfiles();
  };

  const openDeleteModal = id => {
    setSelectedPerfileId(id);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedPerfileId(null);
    setShowDeleteModal(false);
  };

  const handleDelete = id => {
    axios
      .delete(`http://127.0.0.1:8081/perfiles/${id}`)
      .then(() => {
        fetchPerfiles();
        closeDeleteModal();
      })
      .catch(error =>
        console.error('Hubo un error al eliminar el perfil!', error)
      );
  };

  return (
    <div className="container">
      <h2>Lista de Perfiles</h2>
      <button
        onClick={openAddPerfileModal}
        className="btn btn-primary mb-3"
      >
        Nuevo Perfil
      </button>
      <table className="table table-bordered table-striped" >
        <thead>
          <tr>
            <th>ID</th>
            {/* <th>codigo</th> */}
            <th>Nombre del Perfil</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {perfiles.map(perfile => (
            <tr key={perfile.PR_Usu_perf_id}>
              {/* <td>{perfile.PR_Usu_perf_id}</td> */}
              <td>{perfile.PR_Usu_perf_id}</td>
              <td>{perfile.PR_Usu_perf_ch_nomb}</td>
              <td>
                <button
                  onClick={() => openEditPerfileModal(perfile.PR_Usu_perf_id)}
                  className="btn btn-warning btn-sm mr-2"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  onClick={() => openDeleteModal(perfile.PR_Usu_perf_id)}
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
                <button
                  type="button"
                  className="close"
                  onClick={closeDeleteModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que deseas eliminar este perfil?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeDeleteModal}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(selectedPerfileId)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddPerfileModal && (
        <AddPerfile onClose={closeAddPerfileModal} profiles={perfiles} />
      )}
      {showEditPerfileModal && (
        <EditPerfile
          id={selectedPerfileId}
          onClose={closeEditPerfileModal}
          profiles={perfiles}
        />
      )}
    </div>
  );
};

export default PerfileList;
