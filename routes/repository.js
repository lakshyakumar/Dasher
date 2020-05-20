const express = require('express');
const router = express.Router();

router.get('/api/repository/', function(req, res) {
    console.log(process.argv[2])
    res.json({ 
        "repository": `${process.env.REPOSITORY}`,
        "chat": `${process.env.ROCKET_CHAT}`,
        "github": `${process.env.GIT_URL}`
    });
});

module.exports = router;
