
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SmsForm = ({ onClose, fetchMessages, show }) => {
//   const [phone, setPhone] = useState("");
//   const [text, setText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newMessage = { phone, text };

//     axios
//       .post("http://127.0.0.1:8081/api/sms", newMessage)
//       .then(() => {
//         fetchMessages();
//         onClose();
//       })
//       .catch((error) => {
//         console.error("Error al enviar el mensaje!", error);
//       });
//   };

//   return (
//     <Modal show={show} onHide={onClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Enviar SMS</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formPhone">
//             <Form.Label>Teléfono</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Ingrese el número de teléfono"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="formText">
//             <Form.Label>Mensaje</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               placeholder="Ingrese el mensaje"
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Enviar
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default SmsForm;
