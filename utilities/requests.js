const axios = require('axios');

function get(tag ,url, callBack, configurations={}){
        let config = {
            ...configurations,
            auth:{
                username: process.env.GIT_USERNAME,
                password: process.env.GIT_TOKEN
            }
        }
        axios.get(url,config).then(data=>{
            callBack(data.data);
        }).catch(e =>{
            console.log("caught an error",e);
        })
}


function recurrsiveGet(tag, url, callBack, configurations={}){
    let config = {
        ...configurations,
        auth:{
            username: process.env.GIT_USERNAME,
            password: process.env.GIT_TOKEN
        }
    }
     recurseAxiosRequest(url, 1, callBack, [], config)
}

function recurseAxiosRequest(url, page, callback, array, config){
    let recurrseURL = `${url}&page=${page}&per_page=100`;
    axios.get(recurrseURL, config).then(
      data => {
        if(data.data.length == 100){
          array = [...array,...data.data]
          recurseAxiosRequest(url,page+1, callback,array, config);
        }else{
          array = [...array,...data.data]
          callback(array);
        } 
      } 
    ).catch(e =>{
        console.log("caught an error",e);
    })
  }


exports.recurrsiveGet = recurrsiveGet;
exports.get = get;
