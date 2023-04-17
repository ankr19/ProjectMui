import React from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios';

const DataState = (props) => {
  const [manu, setManu] = React.useState([]);

  const [Batches, setBatches] = React.useState([]);

  const [Pics, setPics] = React.useState([]);

  const [update, setUpdate] = React.useState([]);

  const [espM, setEspM] = React.useState([]);

  const [log, setLog] = React.useState([]);
  // let api = "http://192.168.0.113:5002";
  let api = "http://192.168.56.1:5002";

  let config = {
    headers: {
      "Content-Type": "application/json",
    }
  }

  let pro = "/api/v2/";
  
  let allManu = async () => {
    const response = await axios.get(`${api}${pro}getAllManufacturers`)
    // console.log(response.data.body);
    setManu(response.data.body);
    if(response.data.body){
      return response.data.body;
    }
    return [];
  }

  return (
    <DataContext.Provider value={{ manu, allManu }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataState