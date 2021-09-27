import React, { Fragment, useState } from 'react';
import axios from 'axios';


function App() {

    const [username, setUsername] = useState();
    const [pwd, setPwd] = useState();

    const submit = () => {

        console.log(username, pwd)
        axios.post('https://localhost:8000/log/',{
            username : username,
            password : pwd
        }).catch((error) => {
        })
    }

    return (
        <Fragment>
            <div className="container">
                <div className="log-form">
                <input type="text" className="log-form"  placeholder={"username"} onChange={ (event)=>{ setUsername(event.target.value)}} required/>
                <input type="password" className="log-form"  placeholder={"password"} onChange={ (event)=>{ setPwd(event.target.value)}} required/>
                <div type="submit" className="log-btn" onClick={submit} >Log-In</div>
                </div>
            </div>
        </Fragment>
    );
}
  
export default App;