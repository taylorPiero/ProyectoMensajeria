// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SmsForm from "./SmsForm";

// const SmsList = () => {
//   const [messages, setMessages] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = () => {
//     axios
//       .get("http://127.0.0.1:8081/api/sms")
//       .then((response) => {
//         setMessages(response.data);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los mensajes!", error);
//       });
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("¿Estás seguro de que quieres eliminar este mensaje?")) {
//       axios
//         .delete(`http://127.0.0.1:8081/api/sms/${id}`)
//         .then(() => {
//           fetchMessages();
//         })
//         .catch((error) => {
//           console.error("Error al eliminar el mensaje!", error);
//         });
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Lista de Mensajes SMS</h2>
//       <button className="btn btn-primary mb-2" onClick={() => setShowModal(true)}>
//         Enviar SMS
//       </button>

//       <SmsForm
//         onClose={() => setShowModal(false)}
//         fetchMessages={fetchMessages}
//         show={showModal}
//       />

//       <table className="table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Teléfono</th>
//             <th>Mensaje</th>
//             <th>Fecha</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {messages.map((message) => (
//             <tr key={message.id}>
//               <td>{message.id}</td>
//               <td>{message.phone}</td>
//               <td>{message.text}</td>
//               <td>{new Date(message.date).toLocaleDateString()}</td>
//               <td>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(message.id)}>
//                   Eliminar
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SmsList;
