import React, { useState } from "react";


const EventForm = () => {
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPhoto(file);
    }
  };

  const handleUploadClick = () => {
    // implementar la lógica para subir la foto de portada
    console.log("Subiendo foto de portada:", coverPhoto);
  };

  return (
    <div className="content-wrapper" style={{ marginLeft: '0', marginRight: '0', padding: '6px' }}>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Nuevo Evento</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="home">Home</a>
                </li>
                <li className="breadcrumb-item active">evento</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div className="row">
        {/* Columna para Subir Foto de Portada */}
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-body">
              <div className="mb-3">
                {coverPhoto ? (
                  <div className="position-relative">
                    <img
                      src={URL.createObjectURL(coverPhoto)}
                      alt="Cover"
                      className="img-fluid"
                    />
                    <button
                      className="btn btn-primary btn-sm position-absolute top-0 start-0 translate-middle"
                      onClick={handleUploadClick}
                    >
                      Subir Foto de Portada
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="mt-2">Selecciona una imagen</p>
                    <label className="form-label d-block">
                      <input
                        type="file"
                        
                        className="form-control-file mt-2 visually-hidden"
                        onChange={handlePhotoChange}
                      />
                      <span className="btn btn-primary mt-2">
                        Subir Foto de Portada
                      </span> 
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Columna para Formulario del Evento */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Formulario del Evento</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Título del Evento</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Evento"
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Fecha de Inicio</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Fecha de Inicio"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Hora de Inicio</label>
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Hora de Inicio"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Fecha de Fin</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Fecha de Fin"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Hora de Fin</label>
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Hora de Fin"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Descripción</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Descripción del Evento"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
