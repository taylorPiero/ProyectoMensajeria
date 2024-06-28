import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";
import ContactDetal from "./ContactDetal";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [showContactFormModal, setShowContactFormModal] = useState(false);
  const [showContactDetalModal, setShowContactDetalModal] = useState(false);
  const [modalType, setModalType] = useState('new'); // 'new' or 'edit'
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const contactsPerPage = 15;

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios
      .get("http://127.0.0.1:8081/pi002TO1_personas_listget")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los contactos!", error);
      });
  };

  const handleDelete = (id) => {
    setSelectedContactId(id);
    setShowDeleteConfirmationModal(true);
  };

  const openContactFormModal = (id = null) => {
    setSelectedContactId(id);
    setModalType(id ? 'edit' : 'new');
    setShowContactFormModal(true);
  };

  const closeContactFormModal = () => {
    setSelectedContactId(null);
    setModalType('new');
    setShowContactFormModal(false);
    fetchContacts();
  };

  const openContactDetalModal = (id) => {
    setSelectedContactId(id);
    setShowContactDetalModal(true);
  };

  const closeContactDetalModal = () => {
    setSelectedContactId(null);
    setShowContactDetalModal(false);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(contacts.length / contactsPerPage);
  const startIndex = (currentPage - 1) * contactsPerPage;
  const currentContacts = contacts.slice(startIndex, startIndex + contactsPerPage);

  return (
    <div className="container">
      <h2>Grupo de Contactos</h2>
      <button onClick={() => setShowContactFormModal(true)} className="btn btn-primary mb-3">
        Nueva Contacto
      </button>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>F. Nacimiento</th>
              <th>Documento</th>
              <th>Detalles</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.map((contact, index) => (
              <tr key={contact.PR_Per_in_id}>
                <td>{contact.PR_Per_ch_nomb}</td>
                <td>{`${contact.PR_Per_ch_apePat} ${contact.PR_Per_ch_apeMat}`}</td>
                <td>{contact.PR_Per_dt_nac}</td>
                <td>{contact.PR_Per_ch_doc}</td>
                <td>
                  <div className="btn-group">
                    <button
                      onClick={() => openContactDetalModal(contact.PR_Per_in_id)}
                      className="btn btn-info btn-sm mr-2"
                      aria-label="Ver detalles de la persona"
                    >
                      <i className="fas fa-user"></i> Ver detalles
                    </button>
                  </div>
                </td>
                <td>
                  <div className="btn-group">
                    <button
                      onClick={() => openContactFormModal(contact.PR_Per_in_id)}
                      className="btn btn-warning btn-sm mr-2"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(contact.PR_Per_in_id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {/* para la paginacion */}
      <div className="card-footer clearfix">
        <ul className="pagination pagination-sm m-0 float-right">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>&laquo;</button>
          </li>
          {[...Array(totalPages).keys()].map(number => (
            <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(number + 1)}>{number + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(currentPage + 1)}>&raquo;</button>
          </li>
        </ul>
      </div>

      {/* Modal de confirmación para eliminar */}
      <div className={`modal fade ${showDeleteConfirmationModal ? 'show' : ''}`} style={{ display: showDeleteConfirmationModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmación de Eliminación</h5>
              <button type="button" className="close" onClick={() => setShowDeleteConfirmationModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que quieres eliminar este contacto?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteConfirmationModal(false)}>Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={() => handleDelete(selectedContactId)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mostrar modal de ContactForm si showContactFormModal es true */}
      {showContactFormModal && <ContactForm id={selectedContactId} onClose={closeContactFormModal} modalType={modalType} />}

      {/* Mostrar modal de ContactDetal si showContactDetalModal es true */}
      {showContactDetalModal && <ContactDetal contactId={selectedContactId} show={showContactDetalModal} onHide={closeContactDetalModal} />}
    
    </div>
  );
};

export default ContactList;
