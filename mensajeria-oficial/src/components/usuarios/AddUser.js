import React, { useState } from "react";
import axios from "../../api/axios";

const AddUser = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      PR_Usu_ch_nomb: username,
      profileName: profile,
      roleName: role,
    };

    axios.post("http://127.0.0.1:8081/pi003TO1_usuario_add", user)
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error("Hubo un error al agregar el usuario!", error);
      });
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Usuario</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre de Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Perfil</label>
                <input
                  type="text"
                  className="form-control"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Rol</label>
                <input
                  type="text"
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
