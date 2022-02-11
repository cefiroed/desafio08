const express = require('express');
const router = express.Router();
const Container = require('../Managers/classContainer');
const uploader = require('../services/upload');

const container = new Container;

router.get('/',(req,res)=>{
    container.getAll().then(result =>res.send(result))
})

router.get('/:id',(req,res)=>{
    container.getById().then(result =>res.send(result))
})

router.post('/',(req,res)=>{
    let product = req.body;
    let file = req.file;
    // if(!file) return res.status(500).send({error:"Couldn't upload file"})
    // product.thumbnail = req.protocol+"://"+req.hostname+":8080/img/"+file.filename;
    container.add(product).then(result=>res.send(result));
})

router.put('/:id',(req,res)=>{
    let product = req.body;
    let file = req.file;
    if(!file) return res.status(500).send({error:"Couldn't upload file"})
    product.thumbnail = req.protocol+"://"+req.hostname+":8080/img/"+file.filename;
    container.updateProduct().then(result =>res.send(result))
})

router.delete('/:id',(req,res)=>{
    let product = req.body;
    let file = req.file;
    if(!file) return res.status(500).send({error:"Couldn't upload file"})
    container.deleteById().then(result =>res.send(result))
})



module.exports = router;