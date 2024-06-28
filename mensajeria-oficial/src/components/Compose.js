import React from 'react';
//import './dist/css/bootstrap.min.css';

const Compose = () => {
  return (
    <div className="content-wrapper" style={{ marginLeft: '0', marginRight: '0', padding: '6px' }}>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Nuevo Mensaje</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="home">Home</a></li>
                <li className="breadcrumb-item active">Compose</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="row" style={{ marginLeft: '0', marginRight: '0' }}>
          <div className="col-md-3" style={{ paddingLeft: '0', paddingRight: '15px' }}>
            <a href="/inbox" className="btn btn-primary btn-block mb-3">Bandeja de Entrada</a>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Folders</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item active">
                    <a href="#" className="nav-link">
                      <i className="fas fa-inbox"></i> Inbox
                      <span className="badge bg-primary float-right">12</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-envelope"></i> Sent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-file-alt"></i> Drafts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-filter"></i> Junk
                      <span className="badge bg-warning float-right">65</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-trash-alt"></i> Trash
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Labels</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle text-danger"></i> Important
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle text-warning"></i> Promotions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle text-primary"></i> Social
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-9" style={{ paddingLeft: '0', paddingRight: '15px' }}>
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h3 className="card-title">Redacta el nuevo mensaje</h3>
              </div>

              <div className="card-body">
                <div className="form-group">
                  <input className="form-control" placeholder="Para:" autoFocus />
                </div>
                <div className="form-group">
                  <input className="form-control" placeholder="De:"  />
                </div>
                <div className="form-group">
                  <textarea id="compose-textarea" className="form-control" placeholder="Escriba su Mensaje" style={{ height: '300px' }} 
                  // defaultValue={`Heading Of Message`} 
                  />
                </div>
                <div className="form-group">
                  <div className="btn btn-default btn-file">
                    <i className="fas fa-paperclip"></i> subir Archivo
                    <input type="file" name="attachment" />
                  </div>
                  <p className="help-block">Max. 32MB</p>
                </div>
              </div>

              <div className="card-footer">
                <div className="float-right">
                  <button type="button" className="btn btn-default"><i className="fas fa-pencil-alt"></i> Borrador</button>
                  <button type="submit" className="btn btn-primary"><i className="far fa-envelope"></i> Enviar</button>
                </div>
                <button type="reset" className="btn btn-default"><i className="fas fa-times"></i> Descartar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compose;
