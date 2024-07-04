import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  // const rol='supervisor' //la declaramos
  // const handlepermiso = () =>{
  //   if(rol==='supervisor'){ //para dar permiso hasta donde quiero darle 
  //     window.location.replace('/sendSMS')
  //   }else{
  //     window.alert('no puedes ingresar aca')
  //     return

  //   }
  // }
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="/home" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: "0.8" }}
        />
        <span className="brand-text font-weight-light">Proyecto Mensaje</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Taylor
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <a href="/home" className="nav-link active">
                <i className="nav-icon fas fa-home" />
                <p>
                  Home
                </p>
              </a>
            </li>
            <li className="nav-item">
              {/* <a href="#" className="nav-link active"> */}
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>
                  Registro
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/contacts" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Contactos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactinactivos" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Inactivos</p>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-header">EXAMPLES</li>

            {/* <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Charts
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/examples/recover-password-v2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/recover-password-v2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Flot</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/inline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inline</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/uplot.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>uPlot</p>
                </a>
              </li>
            </ul>
          </li> */}

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fab fa-whatsapp" />
                <p>
                  Whatsapp
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/whatsapp/chat" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Chat</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/whatsapp/groups" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Grupos</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/whatsapp/others" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Otros</p>
                  </a>
                </li> 
              </ul>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fab fa-whatsapp" />
                <p>
                  Mensajes Txt
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  {/* <a  className="nav-link"  onClick={handlepermiso}> */}
                  <a href="/sendSMS" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>sms</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/grupos" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Grupos</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/whatsapp/others" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Otros</p>
                  </a>
                </li> 
              </ul>
            </li>
            {/* <li className="nav-item">
              <a href="/compose" className="nav-link">
                <i className="nav-icon fab fa-telegram-plane" />
                <p>
                  Telegran
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/mailbox/mailbox.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Chat</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./pages/mailbox/compose.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Grupos</p>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a href="pages/mailbox/read-mail.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Read</p>
                  </a>
                </li> */}
              {/*</ul>
            </li> */}


<li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    Eventos
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/eventos" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Ver Eventos</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/eventos/create" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Crear Nuevo Evento</p>
                    </Link>
                  </li>
                </ul>
            
            </li>
            
             <li className="nav-header">ADMINISTRACION</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p>
                    Usuarios
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/users" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>usuarios</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/inactiveUser" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inactivos</p>
                    </Link>
                  </li> 
                </ul>
            
              </li>

            


            <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Extras
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/perfileList" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Ver Perfiles</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/roleList" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Ver Roles</p>
                    </Link>
                  </li>
                </ul>
            
            </li>

            
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-search" />
                <p>
                  Search
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/search/simple.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Simple Search</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/search/enhanced.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Enhanced</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
