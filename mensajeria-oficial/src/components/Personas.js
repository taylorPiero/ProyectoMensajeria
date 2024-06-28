// import React,{userEffect,userState} from 'react';
// import axios from "axios";
// import swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import {show_alerta} from '../functions';

// const Personas=()=> {
  
//     const url= "http://127.0.0.1:8081/pi002TO1_personas_listget";
//     const [PRA_PERS_30,setPersonas]=userState([]);
//     const [mf01_p_incodper,setId]=userState('');
//     const [mf01_chnomper ,setNombre]=userState('');
//     const [mf01_chapepatper ,setApePat]=userState('');
//     const [mf01_chapematper ,setApeMat]=userState('');
//     const [mf01_chfecnacper ,setCumple]=userState('');
//     const [mf01_chsexper	,setSexo]=userState('');
//     const [mf01_chmailper	,setCorreo]=userState('');
//     const [mf01_chtelper	,setTelefono]=userState('');
//     const [mf01_chcelper	,setcelular]=userState('');
//     const [mf01_chobsper	,setDescrip]=userState('');
//     const [mf01_inestper	,setestado]=userState('');
//     const [mf01_date_create ,setPrimerR]=userState('');
//     const [operation ,setOperation]=userState('1');
//     const [title ,setTitle]=userState('');

//     useInsertionEffect( ()=>{
//         getPersonas()
//     },{});

//     const getPersonas = async ()=>{
//         const respuesta =await axios.get(url);
//         setPersonas(respuesta.data);
//     }

//     return (
//     <div className='App'>
//         <div className='container-fluid'>
//             <div className='row mt-3'>
//                 <div className='col-md-4 offset-md-4'>
//                     <div className='d-grid mx-auto'>
//                         <button className='btn btn-dark'>
//                             <i className='fa-solid fa-circle-plus'></i>Añadir
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
      
//     </div>
//   )
// }
