import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
const DataTable = () => {
   
    const  [datatable, setDataTable] = useState();
    useEffect(() => {
        axios.get('https://localhost:8000/data/', { 
        }).then(response => {
            let data = response['data']['user'];
            let array = [];
            data.forEach(element => {
                array.push( <li className="elem" key={element.id}>{element.dateArrivee} {element.modele} {element.marque} {element.energie} {element.fourniseur}</li>);
                
            })
            setDataTable(array);
         })
    }, [])

   
      
     

    return (
        <Fragment>
            <ul>
                {datatable}
            </ul>
        </Fragment>
    );
};

export default DataTable;