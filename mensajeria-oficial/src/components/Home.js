import React from "react";

export default function Home() {
    const handleAddNewEvent = () => {
        console.log("Add new event clicked");
        // Implementa la lógica para agregar un nuevo evento
      };
    
      const handleClearEvents = () => {
        console.log("Clear events clicked");
        // Implementa la lógica para limpiar los eventos
      };
    
      const handleViewCalendar = () => {
        console.log("View calendar clicked");
        // Implementa la lógica para ver el calendario
      };
  return (
    <div
      className="content-wrapper"
      style={{ marginLeft: "0", marginRight: "0", padding: "6px" }}
    >
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Escritorio</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="home">Home</a>
                </li>
                <li className="breadcrumb-item active">contacts</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-custom-color">
                <div className="inner">
                  <h3>44</h3>
                  <p>Contactos</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href="contacts" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div> 
            
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>
                  <p>Telegran</p>
                </div>
                <div className="icon">
                  <i className="nav-icon fab fa-telegram-plane" />
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div href="/whatsapp/chat" className="small-box bg-success" >
                <div className="inner">
                  <h3>
                    53<sup style={{ fontSize: 20 }}>%</sup>
                  </h3>
                  <p>Whatsapp</p>
                </div>
                <div className="icon">
                  <i className="nav-icon fab fa-whatsapp" />
                </div>
                <a href="/whatsapp/chat" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>
                  <p>Mensajes SMS</p>
                </div>
                <div className="icon">
                  <i className="nav-icon far fa-envelope" />
                </div>
                <a href="/sendSMS" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>
                  <p>Correos</p>
                </div>
                <div className="icon">
                  <i className="nav-icon far fa-envelope" />
                </div>
                <a href="/inbox" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
          </div>

            <div className="row">
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                <section className="col-lg-12 connectedSortable">
                    {/* Calendar */}
                    <div className="card bg-gradient-success">
                        <div className="card-header border-0">
                            <h3 className="card-title">
                            <i className="far fa-calendar-alt" />
                            Calendar
                            </h3>
                            {/* tools card */}
                            <div className="card-tools">
                            {/* button with a dropdown */}
                            <div className="btn-group">
                                <button
                                type="button"
                                className="btn btn-success btn-sm dropdown-toggle"
                                data-toggle="dropdown"
                                data-offset={-52}
                                >
                                <i className="fas fa-bars" />
                                </button>
                                <div className="dropdown-menu" role="menu">
                                <button className="dropdown-item" onClick={handleAddNewEvent}>
                                    Add new event
                                </button>
                                <button className="dropdown-item" onClick={handleClearEvents}>
                                    Clear events
                                </button>
                                <div className="dropdown-divider" />
                                <button className="dropdown-item" onClick={handleViewCalendar}>
                                    View calendar
                                </button>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-success btn-sm"
                                data-card-widget="collapse"
                            >
                                <i className="fas fa-minus" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-sm"
                                data-card-widget="remove"
                            >
                                <i className="fas fa-times" />
                            </button>
                            </div>
                            {/* /. tools */}
                        </div>
                        {/* /.card-header */}
                        <div className="card-body pt-0">
                            {/*The calendar */}
                            <div id="calendar" style={{ width: "100%" }} />
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </section>
                {/* right col */}
                </div>
             {/* /.row (main row) */}
           </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
}
