class smartphoneServices {
  
    productos=[ {
      "id": 1,
      "marca": "samsung",
      "modelo": "galaxy s20",
      "precio": 600
  },
  {
      "id": 2,
      "marca": "Apple",
      "modelo": "Iphones X",
      "precio": 300
  },
  {
      "id": 3,
      "marca": "Apple",
      "modelo": "Iphones 13",
      "precio": 1000,
      
  },
  {
      "id": 4,
      "marca": "Samsung",
      "modelo": "Z flip",
      "precio": 800
  },
  {
      "id": 5,
      "marca": "Xiaomi",
      "modelo": "No se cualquiera",
      "precio": 100
  }];
    
//    
  create(data){
    const newProduct = {
        "id":"" ,
        ...data
    }
    this.productos.push(newProduct);
    return newProduct;
  };
  // 
  find(){
    return this.productos

  };
  buscarUno(id) {
    return this.productos.filter(item => item.id == id);
   
  };
  update(id, changes){
    const index = this.productos.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error ('product not found')
    }
    this.productos[index] = changes;
    return this.productos[index];

  };
  delete(id ){
    const index = this.productos.findIndex(i=>i.id===id);
    if (index === -1) {
      throw new Error ('product not found')
    }
    this.productos.splice(index, 1);
    return {id};

  };
}
module.exports = smartphoneServices;