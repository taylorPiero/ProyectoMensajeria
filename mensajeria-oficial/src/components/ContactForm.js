import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = ({ id, onClose, modalType }) => {
  const [contact, setContact] = useState({
    PR_Per_ch_nomb: '',
    PR_Per_ch_apePat: '',
    PR_Per_ch_apeMat: '',
    PR_Per_dt_nac: '',
    PR_Per_ch_doc: '',
    PR_Per_in_estado: '',
  });

  useEffect(() => {
    if (modalType === 'edit' && id) {
      axios.get(`http://127.0.0.1:8081/pi002TO1_personas_list_id/${id}`)
        .then(response => {
          const { PR_Per_ch_nomb, PR_Per_ch_apePat, PR_Per_ch_apeMat, PR_Per_dt_nac, PR_Per_ch_doc, PR_Per_in_estado } = response.data;
          setContact({
            PR_Per_ch_nomb,
            PR_Per_ch_apePat,
            PR_Per_ch_apeMat,
            PR_Per_dt_nac,
            PR_Per_ch_doc,
            PR_Per_in_estado,
          });
        })
        .catch(error => {
          console.error('Hubo un error al obtener el contacto!', error);
        });
    } else {
      setContact({
        PR_Per_ch_nomb: '',
        PR_Per_ch_apePat: '',
        PR_Per_ch_apeMat: '',
        PR_Per_dt_nac: '',
        PR_Per_ch_doc: '', 
        PR_Per_in_estado: '',
      });
    }
  }, [id, modalType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrlPersonas = modalType === 'edit' ? `http://127.0.0.1:8081/pi005TO1_personas_update/${id}` : 'http://127.0.0.1:8081/pi003TO1_personas_add';
    const method = modalType === 'edit' ? 'put' : 'post';

    axios[method](apiUrlPersonas, {
      PR_Per_ch_nomb: contact.PR_Per_ch_nomb,
      PR_Per_ch_apePat: contact.PR_Per_ch_apePat,
      PR_Per_ch_apeMat: contact.PR_Per_ch_apeMat,
      PR_Per_dt_nac: contact.PR_Per_dt_nac,
      PR_Per_ch_doc: contact.PR_Per_ch_doc,
      PR_Per_in_estado: contact.PR_Per_in_estado,
    })
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error('Hubo un error al guardar en personas!', error);
      });
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content card-primary card-outline modal-responsive">
          <div className="modal-header" style={{ backgroundColor: modalType === 'edit' ? '#007bff' : '#ebf8ff', color: '#1a202c' }}>
            <h5 className="modal-title">{modalType === 'edit' ? 'Editar Contacto' : 'Agregar Nuevo Contacto'}</h5>
            <button type="button" className="close" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Nombre</label>
                      <input type="text" className="form-control" name="PR_Per_ch_nomb" value={contact.PR_Per_ch_nomb} onChange={handleChange} 
                      placeholder="Ingrese Nombres" autoFocus required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Apellido Paterno</label>
                      <input type="text" className="form-control" name="PR_Per_ch_apePat" value={contact.PR_Per_ch_apePat} onChange={handleChange} 
                      placeholder="Ingrese Apellido Paterno" required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Apellido Materno</label>
                      <input type="text" className="form-control" name="PR_Per_ch_apeMat" value={contact.PR_Per_ch_apeMat} onChange={handleChange} 
                      placeholder="Ingrese Apellido Materno" required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Documento</label>
                      <input type="text" className="form-control" name="PR_Per_ch_doc" value={contact.PR_Per_ch_doc} onChange={handleChange} 
                      placeholder="Ingrese DNI" required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Fecha de Nacimiento</label>
                      <input type="date" className="form-control" name="PR_Per_dt_nac" value={contact.PR_Per_dt_nac} onChange={handleChange} required />
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Estado</label>
                      <select className="form-control" name="PR_Per_in_estado" value={contact.PR_Per_in_estado} onChange={handleChange} required>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
              <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
