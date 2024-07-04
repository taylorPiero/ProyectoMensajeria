import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get('/grupos_listget');
      setGroups(response.data);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/grupos_delete/${id}`);
      setGroups(groups.filter(group => group.PR_Gru_id !== id));
    } catch (error) {
      console.error('Error deleting group:', error);
    }
  };

  const openModal = (group) => {
    setSelectedGroup(group);
    const modal = document.getElementById('groupModal');
    if (modal) {
      window.jQuery(modal).modal('show');
    }
  };

  const closeModal = () => {
    setSelectedGroup(null);
    const modal = document.getElementById('groupModal');
    if (modal) {
      window.jQuery(modal).modal('hide');
    }
  };

  const openGroupDetails = (group) => {
    setSelectedGroup(group);
    const modal = document.getElementById('groupModal');
    if (modal) {
      window.jQuery(modal).modal('show');
    }
  };

  const editGroup = (id) => {
    // Implementar la lógica para editar un grupo
    console.log(`Editar grupo con ID: ${id}`);
  };

  return (
    <div className="content-wrapper" style={{ marginLeft: "0", marginRight: "0", padding: "6px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Lista de Grupos</h1>
            </div>
            <div className="col-sm-6">
              <div className="float-right">
                <Link to="/grupos/add" className="btn btn-primary">
                  <i className="fas fa-plus"></i> Nuevo Grupo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {groups.map(group => (
              <div key={group.PR_Gru_id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{group.PR_Gru_ch_nomb}</h5>
                    <p className="card-text">ID: {group.PR_Gru_id}</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-info btn-sm mr-2" onClick={() => openGroupDetails(group)}>
                      <i className="fas fa-info-circle"></i> Ver Detalles
                    </button>
                    <Link to={`/grupos/edit/${group.PR_Gru_id}`} className="btn btn-warning btn-sm mr-2">
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(group.PR_Gru_id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para mostrar detalles del grupo */}
      <div className="modal fade" id="groupModal" tabIndex="-1" role="dialog" aria-labelledby="groupModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="groupModalLabel">Detalles del Grupo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Cerrar" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {selectedGroup && (
                <div>
                  <h4>{selectedGroup.PR_Gru_ch_nomb}</h4>
                  <p>ID: {selectedGroup.PR_Gru_id}</p>
                  {/* Aquí puedes mostrar más detalles del grupo según necesites */}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupList;