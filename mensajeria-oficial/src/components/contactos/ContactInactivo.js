import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

const Contactinactivo = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;

  useEffect(() => {
    fetchInactiveUsers();
  }, []);

  const fetchInactiveUsers = () => {
    axios
      .get("/usuario_listget_inactive/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los usuarios inactivos!", error);
      });
  };

  const handleSelectUser = (id) => {
    if (selectedUserIds.includes(id)) {
      setSelectedUserIds(selectedUserIds.filter((userId) => userId !== id));
    } else {
      setSelectedUserIds([...selectedUserIds, id]);
    }
  };

  const handleSelectAllUsers = () => {
    if (selectedUserIds.length === users.length) {
      setSelectedUserIds([]);
    } else {
      setSelectedUserIds(users.map((user) => user.PR_Usu_in_id));
    }
  };

  const handleActivateUsers = () => {
    axios
      .put("/usuario_update_estado/", { usuarios_ids: selectedUserIds })
      .then(() => {
        fetchInactiveUsers();
        setSelectedUserIds([]);
      })
      .catch((error) => {
        console.error("Hubo un error al activar los usuarios!", error);
      });
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="container">
      <h2>Usuarios Inactivos</h2>
      <button onClick={handleSelectAllUsers} className="btn btn-primary mb-3 mr-3">
        {selectedUserIds.length === users.length ? 'Desmarcar Todos' : 'Seleccionar Todos'}
      </button>
      <button
        onClick={handleActivateUsers}
        className="btn btn-success mb-3"
        disabled={selectedUserIds.length === 0}
      >
        Activar Usuarios Marcados
      </button>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedUserIds.length === users.length}
                  onChange={handleSelectAllUsers}
                />
              </th>
              <th>Nombre de Usuario</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.PR_Usu_in_id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedUserIds.includes(user.PR_Usu_in_id)}
                    onChange={() => handleSelectUser(user.PR_Usu_in_id)}
                  />
                </td>
                <td>{user.PR_Usu_ch_nomb}</td>
                <td>
                  <button
                    onClick={() => handleActivateUsers([user.PR_Usu_in_id])}
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

export default Contactinactivo;
