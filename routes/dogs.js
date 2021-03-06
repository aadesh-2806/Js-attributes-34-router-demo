const express = require('express');
const router = express.Router();

router.get('/' , (req,res)=>{
    res.send('All Dogs');
})

router.post('/' , (req,res)=>{
    res.send('Creating Dog');
})

router.get('/:id' , (req,res)=>{
    res.send('Viewing Dog');
})

router.get('/:id/edit' , (req,res)=>{
    res.send('Editing Dog');
})

module.exports = router;