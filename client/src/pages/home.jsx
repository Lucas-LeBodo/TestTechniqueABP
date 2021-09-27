import React, { Fragment } from 'react';

import Uploadxlsx from '../components/uploadxlsx'
import DataTable from '../components/datatable'

function App() {

    let token = localStorage.getItem('jwt');
    let xlsx = '';

    if(token === "ROLE_ADMIN"){
        xlsx = <Uploadxlsx />
    }


    return (
        <Fragment>
            <div className="content">
                <section className="main-header">
                    <div className="title"><h1>ARRIVAGE</h1></div>
                    <div className="user">
                        <img id="user_photo"src="https://img.icons8.com/ios/452/user--v1.png" alt="" />
                        <div className="name"><span><span id="firstname"></span> <span id="lastname"></span></span> <a id="logout" href="/log">Déconnexion</a></div>
                    </div>
                </section>
            <section className="nav">
                <div className="container-logo">
                    <img src="https://communication.autobonplan.com/abp-home/img/Logo_Autobonplan.png" alt=""/>
                </div>
                <ul>
                    {xlsx}
                </ul>
            </section>
            <div className="page-content">
            </div>
            <DataTable />
            </div>
        </Fragment>
    );
}
  
export default App;