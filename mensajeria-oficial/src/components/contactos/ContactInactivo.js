import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactInactivo = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 15;

  useEffect(() => {
    fetchInactiveContacts();
  }, []);

  const fetchInactiveContacts = () => {
    axios
      .get("http://127.0.0.1:8081/pi002T01_personas_listget_inactive/")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los contactos inactivos!", error);
      });
  };

  const handleSelectContact = (id) => {
    if (selectedContactIds.includes(id)) {
      setSelectedContactIds(selectedContactIds.filter((contactId) => contactId !== id));
    } else {
      setSelectedContactIds([...selectedContactIds, id]);
    }
  };

  const handleSelectAllContacts = () => {
    if (selectedContactIds.length === contacts.length) {
      setSelectedContactIds([]);
    } else {
      setSelectedContactIds(contacts.map((contact) => contact.PR_Per_in_id));
    }
  };

  const handleActivateContacts = () => {
    axios
      .put("http://127.0.0.1:8081/pi002T01_personas_update_estado/", selectedContactIds)
      .then(() => {
        fetchInactiveContacts();
        setSelectedContactIds([]);
      })
      .catch((error) => {
        console.error("Hubo un error al activar los contactos!", error);
      });
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(contacts.length / contactsPerPage);
  const startIndex = (currentPage - 1) * contactsPerPage;
  const currentContacts = contacts.slice(startIndex, startIndex + contactsPerPage);

  return (
    <div className="container">
      <h2>Contactos Inactivos</h2>
      <button onClick={handleSelectAllContacts} className="btn btn-primary mb-3 mr-3">
        {selectedContactIds.length === contacts.length ? 'Desmarcar ' : 'Seleccionar Todos'}
      </button>
      <button
        onClick={handleActivateContacts}
        className="btn btn-success mb-3"
        disabled={selectedContactIds.length === 0}
      >
        Activar Contactos Marcados
      </button>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedContactIds.length === contacts.length}
                  onChange={handleSelectAllContacts}
                />
              </th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>F. Nacimiento</th>
              <th>Documento</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.map((contact) => (
              <tr key={contact.PR_Per_in_id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedContactIds.includes(contact.PR_Per_in_id)}
                    onChange={() => handleSelectContact(contact.PR_Per_in_id)}
                  />
                </td>
                <td>{contact.PR_Per_ch_nomb}</td>
                <td>{`${contact.PR_Per_ch_apePat} ${contact.PR_Per_ch_apeMat}`}</td>
                <td>{contact.PR_Per_dt_nac}</td>
                <td>{contact.PR_Per_ch_doc}</td>
                <td>
                  <button
                    onClick={() => handleActivateContacts([contact.PR_Per_in_id])}
                    className="btn btn-success btn-sm"
                  >
                    Activar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
    </div>
  );
};

export default ContactInactivo;
