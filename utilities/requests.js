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
            console.log(e);
        })
}


function closedIssues(tag, url, callBack, configurations={}){
    let config = {
        ...configurations,
        auth:{
            username: process.env.GIT_USERNAME,
            password: process.env.GIT_TOKEN
        }
    }
     axiosRequest(url, 1, callBack, [])
}

function axiosRequest(url, page, callback, array){
    let tempURL = `${url}&page=${page}&per_page=100`;
    axios.get(tempURL).then(
      data => {
          console.log(page);
        if(data.data.length == 100){
          array = [...array,...data.data]
          axiosRequest(url,page+1, callback,array)
        }else{
          array = [...array,...data.data]
          callback(array)
        } 
      } 
    )
  }


exports.closedIssues = closedIssues
exports.get = get;
