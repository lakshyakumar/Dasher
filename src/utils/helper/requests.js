import axios from 'axios';


    const get = (url, callback) =>{
        axios.get(`${url}`).then((data)=>{
            callback(data.data)
        })
    };
    const getMetrics = (url, callback,arrayname) =>{
        axios.get(`${url}`).then((data)=>{
            callback(data.data, arrayname)
        })
    };

export {get, getMetrics};