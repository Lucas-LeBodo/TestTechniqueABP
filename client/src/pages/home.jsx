import React, { Fragment } from 'react';

import Uploadxlsx from '../components/uploadxlsx'

function App() {
    return (
        <Fragment>
            <div className="content">
                <section className="main-header">
                    <div className="title"><h1>ARRIVAGE</h1></div>
                    <div className="user">
                        <img id="user_photo"src="https://img.icons8.com/ios/452/user--v1.png" alt="" />
                        <div className="name"><span><span id="firstname"></span> <span id="lastname"></span></span> <a id="logout" href="/">Déconnection</a></div>
                    </div>
                </section>
            <section className="nav">
                <div className="container-logo">
                    <img src="https://communication.autobonplan.com/abp-home/img/Logo_Autobonplan.png" alt=""/>
                </div>
                <ul>
                </ul>
            </section>
            <div className="page-content">
                <Uploadxlsx />
            </div>
            </div>
        </Fragment>
    );
}
  
export default App;