import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

const EditUser = ({ id, onClose }) => {
  const [username, setUsername] = useState("");
  const [profileId, setProfileId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (id) {
      fetchUserDetails();
      fetchProfiles();
      fetchRoles();
    }
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8081/pi001TO1_usuario_list_id/${id}`);
      const user = response.data;
      setUsername(user.PR_Usu_ch_nomb);
      setProfileId(user.PR_Usu_perfid_fk);
      setRoleId(user.PR_Usu_rolid_fk);
    } catch (error) {
      console.error("Hubo un error al obtener los detalles del usuario!", error);
    }
  };

  const fetchProfiles = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8081/perfil_listget");
      setProfiles(response.data);
    } catch (error) {
      console.error("Hubo un error al obtener los perfiles!", error);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8081/roles_listget");
      setRoles(response.data);
    } catch (error) {
      console.error("Hubo un error al obtener los roles!", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      PR_Usu_ch_nomb: username,
      PR_Usu_perfid_fk: profileId,
      PR_Usu_rolid_fk: roleId,
    };

    try {
      await axios.put(`http://127.0.0.1:8081/pi005TO1_usuario_update/${id}`, user);
      onClose();
    } catch (error) {
      console.error("Hubo un error al actualizar el usuario!", error);
    }
  };

  return (
    <div className="modal show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content card-primary card-outline modal-responsive">
          <div className="modal-header">
            <h5 className="modal-title">Editar Usuario</h5>
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
                <select
                  className="form-control"
                  value={profileId}
                  onChange={(e) => setProfileId(e.target.value)}
                  required
                >
                  <option value="">Seleccionar perfil</option>
                  {profiles.map((profile) => (
                    <option key={profile.PR_Usu_perf_id} value={profile.PR_Usu_perf_id}>
                      {profile.PR_Usu_perf_ch_nomb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Rol</label>
                <select
                  className="form-control"
                  value={roleId}
                  onChange={(e) => setRoleId(e.target.value)}
                  required
                >
                  <option value="">Seleccionar rol</option>
                  {roles.map((role) => (
                    <option key={role.PR_Usu_rol_id} value={role.PR_Usu_rol_id}>
                      {role.PR_Usu_rol_ch_nomb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
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

export default EditUser;
