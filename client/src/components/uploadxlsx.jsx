import * as XLSX from 'xlsx';
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';

const Uploadxlsx = () => {
   
    const  [datacar, setDatacar] = useState();


    useEffect(() => {
        if(datacar) {
            axios.post('https://localhost:8000/data/', { 
                body: datacar
            })
            .then(function(response) {
                console.log(response)
            })
        }
        
    }, [datacar]);

    const onChangeHandler = (e) => {
        var files = e.target.files, f = files[0];
        var reader = new FileReader();
        reader.onload = (e) => {

            var data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            readedData.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_json(
                    readedData.Sheets[sheet]
                );
                let jsonObject = rowObject;
                setDatacar(jsonObject);
                console.log(jsonObject);
            });     
        }
        reader.readAsBinaryString(f);
    };
    return (
        <Fragment>
            <input type="file" name="file" onChange={onChangeHandler} />
            <input type="submit" />
        </Fragment>
    );
};

export default Uploadxlsx;