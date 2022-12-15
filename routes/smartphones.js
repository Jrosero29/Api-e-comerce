const express = require("express");
const router = express.Router();
const smartphoneServices =require('../services/smartphoneServices')  ;
const service = new smartphoneServices ();

router.get("/", (req, res) => {
  const products = service.find()
  res.json(products);
});

router.get('/:id', (req, res) => {
  const  id = req.params.id;
  const product = service.buscarUno(id);
  res.json(product);
});


router.post('/',(req,res)=>{
    const body = req.body;
    const newProduct = service.create(body)
    res.status(201).json(newProduct);
});


router.put('/:id', (req, res) => {
  const  id  = req.params.id;
  const body = req.body;
  const product =service.update(id, body)
  res.json(product);
});

 

router.delete('/:id', (req, res) => {
  const  id  = req.params.id;
  const rta =service.delete(id);
  res.json(rta);
});
module.exports = router