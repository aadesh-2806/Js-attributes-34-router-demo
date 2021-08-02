const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next();
    }
    res.send('Sorry Not an admin');
})

router.get('/topsecter' , (req,res)=>{
    res.send('All Top Secrets');
})

router.get('/topsecret/:id' , (req,res)=>{
    res.send('Viewing Top Secret');
})

module.exports = router;