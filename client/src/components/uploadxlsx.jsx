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

            let  infoArray = [];
            let  fournisseurArray = [];
            let  marqueArray = [];
            let  modeleArray = [];
            let  energieArray = [];
            let  achatArray = [];
            let  arriveeArray = [];

            var data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];
            let xlsxjson = XLSX.utils.sheet_to_json(ws, {header: 1});  
            for(let i = 1; i < xlsxjson.length; i++){
                fournisseurArray.push(xlsxjson[i][2]);
                marqueArray.push(xlsxjson[i][6]);
                modeleArray.push(xlsxjson[i][8]);
                energieArray.push(xlsxjson[i][11]);
                achatArray.push(xlsxjson[i][21]);
                arriveeArray.push(xlsxjson[i][45]);

            }
            infoArray.push(fournisseurArray);
            infoArray.push(marqueArray);
            infoArray.push(modeleArray);
            infoArray.push(energieArray);
            infoArray.push(achatArray);
            infoArray.push(arriveeArray);
            setDatacar(infoArray);
        };
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