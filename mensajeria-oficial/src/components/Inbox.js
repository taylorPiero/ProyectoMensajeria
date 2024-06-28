import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Inbox = () => {
  return (
    <div className="content-wrapper" style={{ marginLeft: '0', marginRight: '0', padding: '6px' }}>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Bandeja de Entrada</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="home">Home</a></li>
                <li className="breadcrumb-item active">Inbox</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="row" style={{ marginLeft: '0', marginRight: '0' }}>
          <div className="col-md-3" style={{ paddingLeft: '0', paddingRight: '15px' }}>
            <a href="/compose" className="btn btn-primary btn-block mb-3">Nuevo Mensaje</a>

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
                <h3 className="card-title">Listas Mensajes</h3>
                <div className="card-tools">
                  <div className="input-group input-group-sm">
                    <input type="text" className="form-control" placeholder="Search Mail" />
                    <div className="input-group-append">
                      <div className="btn btn-primary">
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body p-0">
                <div className="mailbox-controls">
                  <button type="button" className="btn btn-default btn-sm checkbox-toggle">
                    <i className="far fa-square"></i>
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="far fa-trash-alt"></i>
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-reply"></i>
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-share"></i>
                    </button>
                  </div>
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-sync-alt"></i>
                  </button>
                  <div className="float-right">
                    1-50/200
                    <div className="btn-group">
                      <button type="button" className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button type="button" className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="table-responsive mailbox-messages">
                  <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" value="" id="check1" />
                            <label htmlFor="check1"></label>
                          </div>
                        </td>
                        <td className="mailbox-star"><a href="#"><i className="fas fa-star text-warning"></i></a></td>
                        <td className="mailbox-name"><a href="/email">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">5 mins ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" value="" id="check2" />
                            <label htmlFor="check2"></label>
                          </div>
                        </td>
                        <td className="mailbox-star"><a href="#"><i className="fas fa-star-o text-warning"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                        <td className="mailbox-date">28 mins ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" value="" id="check3" />
                            <label htmlFor="check3"></label>
                          </div>
                        </td>
                        <td className="mailbox-star"><a href="#"><i className="fas fa-star-o text-warning"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                        <td className="mailbox-date">11 hours ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" value="" id="check4" />
                            <label htmlFor="check4"></label>
                          </div>
                        </td>
                        <td className="mailbox-star"><a href="#"><i className="fas fa-star text-warning"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">15 hours ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" value="" id="check5" />
                            <label htmlFor="check5"></label>
                          </div>
                        </td>
                        <td className="mailbox-star"><a href="#"><i className="fas fa-star text-warning"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><i className="fas fa-paperclip"></i></td>
                        <td className="mailbox-date">Yesterday</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card-footer p-0">
                <div className="mailbox-controls">
                  <button type="button" className="btn btn-default btn-sm checkbox-toggle">
                    <i className="far fa-square"></i>
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="far fa-trash-alt"></i>
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-reply"></i>
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-share"></i>
                    </button>
                  </div>
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-sync-alt"></i>
                  </button>
                  <div className="float-right">
                    1-50/200
                    <div className="btn-group">
                      <button type="button" className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button type="button" className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
{/* <div>
  $(function () {'{'}
  //Enable check and uncheck all functionality
  $('.checkbox-toggle').click(function () {'{'}
  var clicks = $(this).data('clicks')
  if (clicks) {'{'}
  //Uncheck all checkboxes
  $('.mailbox-messages input[type=\'checkbox\']').prop('checked', false)
  $('.checkbox-toggle .far.fa-check-square').removeClass('fa-check-square').addClass('fa-square')
  {'}'} else {'{'}
  //Check all checkboxes
  $('.mailbox-messages input[type=\'checkbox\']').prop('checked', true)
  $('.checkbox-toggle .far.fa-square').removeClass('fa-square').addClass('fa-check-square')
  {'}'}
  $(this).data('clicks', !clicks)
  {'}'})
  //Handle starring for font awesome
  $('.mailbox-star').click(function (e) {'{'}
  e.preventDefault()
  //detect type
  var $this = $(this).find('a &gt; i')
  var fa    = $this.hasClass('fa')
  //Switch states
  if (fa) {'{'}
  $this.toggleClass('fa-star')
  $this.toggleClass('fa-star-o')
  {'}'}
  {'}'})
  {'}'})
</div> */}


export default Inbox;
