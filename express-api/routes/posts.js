const express = require("express");
const post = require('../models/post');

const router = express();


router.get("/",(req,res) =>{
    post.find()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    })
});

router.post("/",(req,res) =>{
    const ok = new post({
        title:req.body.title,
        description:req.body.description,
    })
    ok.save()
    .then(data => {
         res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
   
});

module.exports = router;