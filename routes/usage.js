const express = require('express');
const usageRouter = express.Router();
const requests = require('../utilities/requests');

usageRouter.get('/api/forked/', function(req, res) {
    console.log("forked");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/forks?";
    requests.recurrsiveGet(
                    "forked",
                    url,
                    (data)=>{
                        let todayForked = data.filter((item)=>{
                            var today = new Date();
                            if(today.setHours(0,0,0,0) == new Date(item["created_at"]).setHours(0,0,0,0)){ 
                                return true; 
                            }
                            else{
                                return false;
                            } 
                        })
                        console.log({ "name": "Forked", "total": data.length, today: todayForked.length })
                        res.json({ "name": "Forked" ,"total": data.length, today: todayForked.length })
                    }
                );
});

usageRouter.get('/api/clones/', function(req, res) {
    console.log("clones");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/traffic/clones";
    requests.get(
                    "clones",
                    url,
                    data => {
                        let clones = data.clones.filter((item)=>{
                            var today = new Date();
                            if(today.setHours(0,0,0,0) == new Date(item["timestamp"]).setHours(0,0,0,0))
                            { return true; }
                            else{
                                return false;
                            } 
                        })
                        console.log({ "name": "Clones", "total": data.count, today: clones.length ? clones[0].count : 0})
                        res.json({ "name": "Clones", "total": data.count, today: clones.length ? clones[0].count : 0})
                    }
                );
});

usageRouter.get('/api/unique_clones/', function(req, res) {
    console.log("unique clones");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/traffic/clones";
    requests.get(
                    "unique_clones",
                    url,
                    data => {
                        let clones = data["clones"].filter((item)=>{
                            var today = new Date();
                            if(today.setHours(0,0,0,0) == new Date(item["timestamp"]).setHours(0,0,0,0))
                            { return true; }
                            else{
                                return false;
                            } 
                        })
                        console.log({ "name": "Unique Clones", "total": data.uniques, today: clones.length ? clones[0].uniques : 0 })
                        res.json({ "name": "Unique Clones", "total": data.uniques, today: clones.length ? clones[0].uniques : 0 })
                    }
                );
});


module.exports = usageRouter;
