const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      marca: "samsung",
      modelo: "galaxy s20",
      precio: 600,
    },
    {
      id: 2,
      marca: "Apple",
      modelo: "Iphones X",
      precio: 300,
    },
    {
      id: 3,
      marca: "Apple",
      modelo: "Iphones 13",
      precio: 1000,
    },
    {
      id: 4,
      marca: "Samsung",
      modelo: "Z flip",
      precio: 800,
    },
    {
      id: 5,
      marca: "Xiaomi",
      modelo: "No se cualquiera",
      precio: 100,
    },
  ]);
});
router.get("/marca/:marca/id/:id", (req, res) => {
  const { marca } = req.params;
  const { id } = req.params;
  if(id==='123'){
    res.status(404).json({
      message:'not found'
      });
  }else{res.status(200).json({
    id,
    marca,
    modelo,
    precio: 600,
  });}
  
});
router.post('/',(req,res)=>{
    const body = req.body;
    res.status(201).json({
        messagr:'created',
        data:body
    }
    )
});
router.patch('/marca/:marca/id/:id',(req,res)=>{
    const {id}= req.params;
    const body= req.body;
    res.json({
        mesage: "update", 
        data:body,
        id
    })

});
router.delete('/marca/:marca/id/:id',(req,res)=>{
    const {id}= req.params;
    const body= req.body;
    res.json({
        mesage: "deleted", 
        data:body,
        id,
    })

});
module.exports = router;
