import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://127.0.0.1:8081/pi002TO1_usuario_listget")
      .then(async (response) => {
        const usersWithDetails = await Promise.all(
          response.data.map(async (user) => {
            const profileResponse = await axios.get(`http://127.0.0.1:8081/perfiles/${user.PR_Usu_perfid_fk}`);
            const roleResponse = await axios.get(`http://127.0.0.1:8081/roles/${user.PR_Usu_rolid_fk}`);
            return {
              ...user,
              profileName: profileResponse.data.PR_Usu_perf_ch_nomb,
              roleName: roleResponse.data.PR_Usu_rol_ch_nomb
            };
          })
        );
        setUsers(usersWithDetails);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los usuarios!", error);
      });
  };

  const handleDelete = (id) => {
    setSelectedUserId(id);
    setShowDeleteConfirmationModal(true);
  };

  const confirmDelete = () => {
    axios
      .delete(`http://127.0.0.1:8081/pi004TO1_usuarios_delete/${selectedUserId}`)
      .then(() => {
        setUsers(users.filter((user) => user.PR_Usu_in_id !== selectedUserId));
        setShowDeleteConfirmationModal(false);
        setSelectedUserId(null);
      })
      .catch((error) => {
        console.error("Hubo un error al eliminar el usuario!", error);
      });
  };

  const openAddUserModal = () => {
    setShowAddUserModal(true);
  };

  const closeAddUserModal = () => {
    setShowAddUserModal(false);
    fetchUsers();
  };

  const openEditUserModal = (id) => {
    setSelectedUserId(id);
    setShowEditUserModal(true);
  };

  const closeEditUserModal = () => {
    setSelectedUserId(null);
    setShowEditUserModal(false);
    fetchUsers();
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="container">
      <h2>Lista de Usuarios</h2>
      <button onClick={openAddUserModal} className="btn btn-primary mb-3">
        Nuevo Usuario
      </button>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nombre de Usuario</th>
              <th>Perfil</th>
              <th>Rol</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.PR_Usu_in_id}>
                <td>{user.PR_Usu_ch_nomb}</td>
                <td>{user.profileName}</td>
                <td>{user.roleName}</td>
                <td>
                  <div className="btn-group">
                    <button
                      onClick={() => openEditUserModal(user.PR_Usu_in_id)}
                      className="btn btn-warning btn-sm mr-2"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(user.PR_Usu_in_id)}
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

      {showAddUserModal && <AddUser onClose={closeAddUserModal} />}
      {showEditUserModal && <EditUser id={selectedUserId} onClose={closeEditUserModal} />}
      {showDeleteConfirmationModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content card-danger card-outline modal-responsive">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Eliminación</h5>
                <button type="button" className="close" onClick={() => setShowDeleteConfirmationModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro que deseas eliminar a este usuario?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteConfirmationModal(false)}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-link ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
