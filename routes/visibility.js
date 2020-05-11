const express = require('express');
const axios = require('axios');
const visibilityRouter = express.Router();

visibilityRouter.get('/api/forked/', function(req, res) {
    console.log("forked");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/forks?page=1&per_page=100";
    console.log(url)
    axios.get(url).then(data => {
        let todayForked = data.data.filter((item)=>{
            var today = new Date();
            if(today.setHours(0,0,0,0) == new Date(item["created_at"]).setHours(0,0,0,0))
            { return true; }
            else{
                return false;
            } 
        })
        console.log({ "name": "Forked", "total": data.data.length, today: todayForked.length})
        res.json({ "name": "Forked" ,"total": data.data.length, today: todayForked.length})
    })
});

visibilityRouter.get('/api/starred/', function(req, res) {
    console.log("starred");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/stargazers?page=1&per_page=100"
    console.log(url)
    axios.get(url,{
        headers:{
            "Accept": "application/vnd.github.v3.star+json"
        }
    }).then(data => {
        let todayForked = data.data.filter((item)=>{
            var today = new Date();
            if(today.setHours(0,0,0,0) == new Date(item["starred_at"]).setHours(0,0,0,0))
            { return true; }
            else{
                return false;
            } 
        })
        console.log({ "name": "Sttarred", "total": data.data.length, today: todayForked.length})
        res.json({ "name": "Starred", "total": data.data.length, today: todayForked.length})
    })
});

visibilityRouter.get('/api/contributors/', function(req, res) {
    console.log("contributors");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/stats/contributors?page=1&per_page=100";
    console.log(url)
    axios.get(url).then(data => {
        let today = []
        console.log({ "name": "Contributors", "total": data.data.length, today: today.length})
        res.json({"name": "Contributors", "total": data.data.length, today: today.length})
    })
});

visibilityRouter.get('/api/watchers/', function(req, res) {
    console.log("watchers");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/subscribers?page=1&per_page=100";
    console.log(url)
    axios.get(url).then(data => {
        let today = []
        console.log({ "name": "Watchers", "total": data.data.length, today: today.length})
        res.json({ "name": "Watchers", "total": data.data.length, today: today.length})
    })
});

module.exports = visibilityRouter;