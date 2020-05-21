const express = require('express');
const axios = require('axios');
const maintainanceRouter = express.Router();
const requests = require('../utilities/requests');

maintainanceRouter.get('/api/open_issues/', function(req, res) {
    console.log("Open issues");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/issues?state=open&";
    requests.recurrsiveGet(
                    "open_issues",
                    url,
                    data => {
                        let todayIssues = data.filter((item)=>{
                            var today = new Date();
                            if(today.setHours(0,0,0,0) == new Date(item["created_at"]).setHours(0,0,0,0))
                            { return true; }
                            else{
                                return false;
                            } 
                        })
                        console.log({ "name": "Open Issues", "total": data.length, today: todayIssues.length})
                        res.json({ "name": "Open Issues" ,"total": data.length, today: todayIssues.length})
                    }
                );
});

maintainanceRouter.get('/api/closed_issues/', function(req, res) {
    console.log("Closed issues");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/issues?state=closed&";
    requests.recurrsiveGet(
                    "closed_isses",
                    url,
                    data => {
                        let todayIssues = data.filter((item)=>{
                            var today = new Date();
                            if(today.setHours(0,0,0,0) == new Date(item["closed_at"]).setHours(0,0,0,0))
                            { return true; }
                            else{
                                return false;
                            } 
                        })
                        console.log({ "name": "Closed Issues", "total": data.length, today: todayIssues.length})
                        res.json({ "name": "Closed Issues" ,"total": data.length, today: todayIssues.length})
                    }
                );
});

maintainanceRouter.get('/api/open_pr/', function(req, res) {
    console.log("Open pr");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/pulls?state=open&";
    requests.recurrsiveGet(
                    "open_pr",
                    url,
                    data => {
                        let todayRequest = data.filter((item)=>{
                            var today = new Date();
                            if(today.setHours(0,0,0,0) == new Date(item["created_at"]).setHours(0,0,0,0))
                            { return true; }
                            else{
                                return false;
                            } 
                        })
                        console.log({ "name": "Open PR", "total": data.length, today: todayRequest.length})
                        res.json({ "name": "Open PR" ,"total": data.length, today: todayRequest.length})
                    }
                );
});

maintainanceRouter.get('/api/closed_pr/', function(req, res) {
    console.log("Closed PR");
    let url = "https://api.github.com/repos/hyperledger-labs/blockchain-automation-framework/pulls?state=closed&";
    requests.recurrsiveGet(
                    "closed_pr",
                    url,
                    data => {
                        let todayRequest = data.filter((item)=>{
                            var today = new Date();
                            if(today.setHours(0,0,0,0) == new Date(item["closed_at"]).setHours(0,0,0,0))
                            { return true; }
                            else{
                                return false;
                            } 
                        })
                        console.log({ "name": "Closed PR", "total": data.length, today: todayRequest.length})
                        res.json({ "name": "Closed PR" ,"total": data.length, today: todayRequest.length})
                    }
                )
});

module.exports = maintainanceRouter;
