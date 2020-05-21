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
        })
}

exports.get = get;
