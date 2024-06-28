import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

const EditUser = ({ id, onClose }) => {
  const [username, setUsername] = useState("");
  const [profileId, setProfileId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [profileName, setProfileName] = useState("");
  const [roleName, setRoleName] = useState("");

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:8081/pi001TO1_usuario_list_id/${id}`)
        .then(async (response) => {
          const user = response.data;
          setUsername(user.PR_Usu_ch_nomb);
          setProfileId(user.PR_Usu_perfid_fk);
          setRoleId(user.PR_Usu_rolid_fk);

          // Fetch profile and role names
          const profileResponse = await axios.get(`http://127.0.0.1:8081/perfiles/${user.PR_Usu_perfid_fk}`);
          const roleResponse = await axios.get(`http://127.0.0.1:8081/roles/${user.PR_Usu_rolid_fk}`);
          setProfileName(profileResponse.data.PR_Usu_perf_ch_nomb);
          setRoleName(roleResponse.data.PR_Usu_rol_ch_nomb);
        })
        .catch(error => {
          console.error("Hubo un error al obtener los detalles del usuario!", error);
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      PR_Usu_ch_nomb: username,
      PR_Usu_perfid_fk: profileId,
      PR_Usu_rolid_fk: roleId
    };

    axios.put(`http://127.0.0.1:8081/pi005TO1_usuario_update/${id}`, user)
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error("Hubo un error al actualizar el usuario!", error);
      });
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
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
                  <option value="">{profileName}</option>
                  {/* Aquí puedes agregar opciones adicionales de perfiles */}
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
                  <option value="">{roleName}</option>
                  {/* Aquí puedes agregar opciones adicionales de roles */}
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
