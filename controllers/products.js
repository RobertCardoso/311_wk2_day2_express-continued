let products = require('../data/products');

let list = function(req, res){
    console.log("GET /products")
    res.json(products)
}

let show = function(req, res){
    console.log("GET /products/:id", req.params.id)

    let found = products.find(i => i._id == req.params.id)
        

    res.json(found)
}

let create = function(req, res){
    console.log("POST /products")
    let json = req.body
    
  

    let newProduct = {}
    newProduct._id = products.length + 1
    newProduct.name = json.name
    newProduct.description = json.description

    products.push(newProduct)

    res.json(newProduct)
}

module.exports = {
    list,
    show,
    create
}