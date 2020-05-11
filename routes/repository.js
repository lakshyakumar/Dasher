const express = require('express');
const router = express.Router();

router.get('/api/repository/', function(req, res) {
    console.log(process.argv[2])
    res.json({ 
        "repository": `${process.argv[2]}`,
        "chat": `${process.argv[4]}`,
        "github": `${process.argv[3]}`
    });
});

module.exports = router;