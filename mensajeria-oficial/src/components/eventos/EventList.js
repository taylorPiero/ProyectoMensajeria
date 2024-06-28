import React, { useState, useEffect } from 'react';

const EventList = () => {
  // Define el estado inicial para los eventos
  const [events, setEvents] = useState([]);

  // Simulación de la carga de eventos (puedes reemplazar esto con una llamada a una API)
  useEffect(() => {
    // Simula la obtención de datos de eventos (puede ser una llamada a una API)
    const fetchEvents = async () => {
      const response = await fetch('/api/events'); // Asegúrate de que esta URL esté correcta
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="content-wrapper" style={{ marginLeft: '0', marginRight: '0', padding: '6px' }}>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Lista de Eventos</h1>
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
    </div>
  );
};

export default EventList;
