class computadoresServices {
  
    productos=[ {
      "id": 1,
      "marca": "Asus",
      "modelo": "mdb21",
      "precio": 600
  },
  {
      "id": 2,
      "marca": "Apple",
      "modelo": "Mcbook",
      "precio": 1000
  },
  {
      "id": 3,
      "marca": "Acer",
      "modelo": "flip",
      "precio": 1000,
      
  },
  {
      "id": 4,
      "marca": "Hp",
      "modelo": "Pavilion",
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
  delete(id) {
    
    let index = this.productos.findIndex(item => item.id == id);
  
   
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  };
}
module.exports =computadoresServices;