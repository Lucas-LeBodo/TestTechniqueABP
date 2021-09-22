import React, { Fragment } from 'react';

function App() {
    return (
        <Fragment>
            <div class="content">
                <section class="main-header">
                    <div class="title"><h1>ARRIVAGE</h1></div>
                    <div class="user">
                        <img id="user_photo"src="https://img.icons8.com/ios/452/user--v1.png" alt="" />
                        <div class="name"><span><span id="firstname"></span> <span id="lastname"></span></span> <a id="logout" href="/">Déconnection</a></div>
                    </div>
                </section>
            <section class="nav">
                <div class="container-logo">
                    <img src="https://communication.autobonplan.com/abp-home/img/Logo_Autobonplan.png" alt=""/>
                </div>
                <ul>
                </ul>
            </section>
            <div class="page-content">
            </div>
            </div>
        </Fragment>
    );
}
  
export default App;