import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactDetal = ({ contactId, show, onHide }) => {
  const [details, setDetails] = useState([]);
  const [newDetail, setNewDetail] = useState({ PR_DetP_ch_tel: '', PR_DetP_ch_email: '', PR_DetP_ch_sexo: 'M' });
  const [editDetail, setEditDetail] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState({ show: false, detailId: null });
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [errors, setErrors] = useState({ telError: false, emailError: false });

  useEffect(() => {
    if (show && contactId) {
      fetchContactDetails(contactId);
    }
  }, [show, contactId]);

  const fetchContactDetails = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8081/pi001TO1_personasdetalle_list_id/${id}`);
      console.log("Datos recibidos del servidor:", response.data);
      setDetails(response.data);
    } catch (error) {
      console.error('Error fetching contact details:', error);
      setDetails([]);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8081/pi004TO1_personasdetalle_delete/${showDeleteModal.detailId}`);
      fetchContactDetails(contactId);
      setShowDeleteModal({ show: false, detailId: null });
    } catch (error) {
      console.error('Error deleting contact detail:', error);
    }
  };

  const handleEdit = async () => {
    if (!editDetail.PR_DetP_ch_tel || !editDetail.PR_DetP_ch_email) {
      setErrors({ telError: !editDetail.PR_DetP_ch_tel, emailError: !editDetail.PR_DetP_ch_email });
      return;
    }

    try {
      await axios.put(`http://127.0.0.1:8081/pi005TO1_personasdetalle_update/${editDetail.PR_DetP_id}`, editDetail);
      fetchContactDetails(contactId);
      setShowEditModal(false);
      setEditDetail(null);
      setShowEditConfirmation(true); // Mostrar mensaje de confirmación de edición
      setTimeout(() => setShowEditConfirmation(false), 5000); // Ocultar mensaje después de 5 segundos
    } catch (error) {
      console.error('Error updating contact detail:', error);
    }
  };

  const handleAdd = async () => {
    if (!newDetail.PR_DetP_ch_tel || !newDetail.PR_DetP_ch_email) {
      setErrors({ telError: !newDetail.PR_DetP_ch_tel, emailError: !newDetail.PR_DetP_ch_email });
      return;
    }

    try {
      await axios.post(`http://127.0.0.1:8081/pi003TO1_personasdetalle_add/`, { ...newDetail, FK_PR_Pers: contactId });
      fetchContactDetails(contactId);
      setShowAddModal(false);
      setNewDetail({ PR_DetP_ch_tel: '', PR_DetP_ch_email: '', PR_DetP_ch_sexo: 'M' });
      setShowSaveConfirmation(true); // Mostrar mensaje de confirmación de guardado
      setTimeout(() => setShowSaveConfirmation(false), 3000); // Ocultar mensaje después de 3 segundos
    } catch (error) {
      console.error('Error adding new contact detail:', error);
    }
  };

  const handleTelChange = (value) => {
    setNewDetail({ ...newDetail, PR_DetP_ch_tel: value });
    setErrors({ ...errors, telError: false });
  };

  const handleEmailChange = (value) => {
    setNewDetail({ ...newDetail, PR_DetP_ch_email: value });
    setErrors({ ...errors, emailError: false });
  };

  const handleEditTelChange = (value) => {
    setEditDetail({ ...editDetail, PR_DetP_ch_tel: value });
    setErrors({ ...errors, telError: false });
  };

  const handleEditEmailChange = (value) => {
    setEditDetail({ ...editDetail, PR_DetP_ch_email: value });
    setErrors({ ...errors, emailError: false });
  };

  return (
    //  Modal para Ver Detalles 
    <div className="modal" id="modal-default" style={{ display: show ? "block" : "none" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Detalles de la Persona</h4>
            <button type="button" className="close" onClick={onHide}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Sexo</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {details.length > 0 ? (
                    details.map((detail) => (
                      <tr key={detail.PR_DetP_id}>
                        <td>{detail.PR_DetP_ch_tel}</td>
                        <td>{detail.PR_DetP_ch_email}</td>
                        <td>{detail.PR_DetP_ch_sexo === 'M' ? 'Masculino' : 'Femenino'}</td>
                        <td>
                          <button
                            onClick={() => {
                              setEditDetail(detail);
                              setShowEditModal(true);
                            }}
                            className="btn btn-warning btn-sm mr-2"
                          >
                            <i className="fas fa-edit"></i> 
                          </button>
                          <button
                            onClick={() => setShowDeleteModal({ show: true, detailId: detail.PR_DetP_id })}
                            className="btn btn-danger btn-sm"
                          >
                            <i className="fas fa-trash-alt"></i> 
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan="4">Cargando detalles del contacto o Agrega un detalle..</td></tr>
                  )}
                </tbody>
              </table>
            </div>
            <button onClick={() => setShowAddModal(true)} className="btn btn-success btn-sm">
              <i className="fas fa-plus"></i> Agregar
            </button>
          </div>
          <div className="modal-footer">
            <button onClick={onHide} className="btn btn-secondary">Cancelar</button>
          </div>
        </div>
      </div>

      {/* Modal para Agregar Detalle */}
      {showAddModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar Nuevo Detalle</h5>
                <button type="button" className="close" onClick={() => setShowAddModal(false)}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Teléfono</label>
                  <input 
                    type="text"
                    className={`form-control ${errors.telError ? 'is-invalid' : ''}`}
                    placeholder="Teléfono"
                    value={newDetail.PR_DetP_ch_tel}
                    onChange={(e) => handleTelChange(e.target.value)}
                    required 
                  />
                  {errors.telError && <div className="invalid-feedback">Por favor ingrese el teléfono.</div>}
                </div>
                <div className="form-group">
                  <label>Correo</label>
                  <input 
                    type="email"
                    className={`form-control ${errors.emailError ? 'is-invalid' : ''}`}
                    placeholder="Correo"
                    value={newDetail.PR_DetP_ch_email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    required 
                  />
                  {errors.emailError && <div className="invalid-feedback">Por favor ingrese el correo.</div>}
                </div>
                <div className="form-group">
                  <label>Sexo</label>
                  <select
                    className="form-control"
                    value={newDetail.PR_DetP_ch_sexo}
                    onChange={(e) => setNewDetail({ ...newDetail, PR_DetP_ch_sexo: e.target.value })}
                  >
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button onClick={handleAdd} className="btn btn-success">Agregar</button>
                <button onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal para Editar Detalle */}
      {showEditModal && editDetail && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Detalle</h5>
                <button type="button" className="close" onClick={() => setShowEditModal(false)}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Teléfono</label>
                  <input 
                    type="text"
                    className={`form-control ${errors.telError ? 'is-invalid' : ''}`}
                    placeholder="Teléfono"
                    value={editDetail.PR_DetP_ch_tel}
                    onChange={(e) => handleEditTelChange(e.target.value)}
                  />
                  {errors.telError && <div className="invalid-feedback">Por favor ingrese el teléfono.</div>}
                </div>
                <div className="form-group">
                  <label>Correo</label>
                  <input 
                    type="email"
                    className={`form-control ${errors.emailError ? 'is-invalid' : ''}`}
                    placeholder="Correo"
                    value={editDetail.PR_DetP_ch_email}
                    onChange={(e) => handleEditEmailChange(e.target.value)}
                  />
                  {errors.emailError && <div className="invalid-feedback">Por favor ingrese el correo.</div>}
                </div>
                <div className="form-group">
                  <label>Sexo</label>
                  <select
                    className="form-control"
                    value={editDetail.PR_DetP_ch_sexo}
                    onChange={(e) => setEditDetail({ ...editDetail, PR_DetP_ch_sexo: e.target.value })}
                  >
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button onClick={handleEdit} className="btn btn-success">Guardar</button>
                <button onClick={() => setShowEditModal(false)} className="btn btn-secondary">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mensaje de Confirmación de Guardado */}
      {showSaveConfirmation && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Guardado Exitoso</h5>
                <button type="button" className="close" onClick={() => setShowSaveConfirmation(false)}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>El detalle se ha guardado exitosamente.</p>
              </div>
              <div className="modal-footer">
                <button onClick={() => setShowSaveConfirmation(false)} className="btn btn-primary">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mensaje de Confirmación de Edición */}
      {showEditConfirmation && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edición Exitosa</h5>
                <button type="button" className="close" onClick={() => setShowEditConfirmation(false)}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>El detalle se ha editado exitosamente.</p>
              </div>
              <div className="modal-footer">
                <button onClick={() => setShowEditConfirmation(false)} className="btn btn-primary">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal para Confirmar Eliminación */}
      {showDeleteModal.show && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Eliminación</h5>
                <button type="button" className="close" onClick={() => setShowDeleteModal({ show: false, detailId: null })}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que deseas eliminar este detalle?</p>
              </div>
              <div className="modal-footer">
                <button onClick={handleDelete} className="btn btn-danger">Eliminar</button>
                <button onClick={() => setShowDeleteModal({ show: false, detailId: null })} className="btn btn-secondary">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetal;
