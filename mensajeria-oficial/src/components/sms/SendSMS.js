import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import CreatableSelect from 'react-select/creatable';

const SendSMS = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [recipientsList, setRecipientsList] = useState([]);
  console.log(recipientsList)
  const [options, setOptions] = useState([]);
  const [selectedRecipients, setSelectedRecipients] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de detalles de personas
    axios.get('http://127.0.0.1:8081/pi002TO1_personasdetalle_listget/')
      .then(response => {
        const data = response.data.map(detalle => ({
          value: detalle.PR_DetP_id,
          label: `${detalle.PR_DetP_ch_tel} - ${detalle.per_persona ? `${detalle.per_persona.PR_Per_ch_nomb} ${detalle.per_persona.PR_Per_ch_apePat} ${detalle.per_persona.PR_Per_ch_apeMat}` : 'Nombre no disponible 2'}`
        }));
        setOptions(data);
        console.error(response);
      })
      .catch(error => {
        console.error('Error fetching detalles personas:', error);
      });
  }, []);

    // Función para manejar el botón de Agregar Destinatario
    const handleAddRecipient = () => {
    if (selectedRecipients.length > 0) {
        const newRecipients = selectedRecipients.map(recipient => ({
        label: recipient.label,
        value: recipient.value // Usar PR_DetP_id en lugar de PR_DetP_ch_tel
        }));
        setRecipientsList([...recipientsList, ...newRecipients]);
        setSelectedRecipients([]);
    }
    };

  // Función para eliminar un destinatario de la lista
  const handleRemoveRecipient = (index) => {
    const newRecipientsList = [...recipientsList];
    newRecipientsList.splice(index, 1);
    setRecipientsList(newRecipientsList);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Obtener los teléfonos de las personas seleccionadas
      const phoneNumbers = recipientsList.map(recipient => recipient.value);
        console.log(phoneNumbers)
      // Enviar el mensaje SMS a los destinatarios seleccionados
      const response = await axios.post('/send_sms/', {
        recipients: phoneNumbers,
        message: message.trim()
      });

      setSuccessMessage(response.data.message);
      setRecipientsList([]); // Limpiamos la lista de destinatarios después del envío exitoso
    } catch (error) {
      setError('Error al enviar el mensaje SMS. Por favor, verifica los destinatarios y vuelve a intentarlo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-wrapper" style={{ marginLeft: "0", marginRight: "0", padding: "6px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6"></div>
              <div className="container">
                <h2>Enviar Mensaje SMS</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="recipientIds">Destinatarios:</label>
                    <CreatableSelect
                      id="recipientIds"
                      options={options}
                      value={selectedRecipients}
                      onChange={setSelectedRecipients}
                      placeholder="Selecciona numero"
                      isMulti
                      formatCreateLabel={(inputValue) => `Agregar "${inputValue}"`}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                    <div className="mt-3 text-right">
                      <button
                          className="btn btn-success"
                          type="button"
                          onClick={handleAddRecipient}
                          >
                          Agregar
                      </button>
                    </div>
                    <ul className="list-group mb-3 mt-3">
                      {recipientsList.map((recipient, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                          {recipient.label}
                          <button
                            className="btn btn-danger btn-sm"
                            type="button"
                            onClick={() => handleRemoveRecipient(index)}
                          >
                            Eliminar
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Escribe tu mensaje aquí"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar SMS'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
     </div>
  );
};

export default SendSMS;
