const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contacts = require('./data/contacts') // PERGUNTAR AO PROFESSOR PQ ENTRE CHAVES {} NAO FUNCIONOU
let vehicles = require('./data/vehicles')
let comments = require('./data/comments')
let products = require('./data/products');


const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(bodyParser.json())



app.get("/contacts", function(req, res){
    console.log("GET /contacts")
    res.json(contacts)
})

app.get("/vehicles", function(req, res){
    console.log("GET /vehicles")
    res.json(vehicles)
})

app.get("/comments", function(req, res){
    console.log("GET /comments")
    res.json(comments)
})

app.get("/products", function(req, res){
    console.log("GET /products")
    res.json(products)
})

app.get("/contacts/:id", function(req, res){
    console.log("GET /contacts/:id", req.params.id)

    let found = contacts.find(function(i){   //obj => obj._id == req.params.id
        if(i._id == req.params.id){ //PERGUNTAR AO PROFESSOR PQ 3 IGUAIS NAO FUNCIONOU  
            return true
        }
    })

    res.json(found)
})

app.get("/vehicles/:id", function(req, res){
    console.log("GET /vehicles/:id", req.params.id)
    
    let found = vehicles.find(function(i){ 
        if(i._id == req.params.id){ 
            return true
        }
    })

    res.json(found)
})

app.get("/comments/:id", function(req, res){
    console.log("GET /comments/:id", req.params.id)

    let found = comments.find(function(i){ 
        if(i._id == req.params.id){ 
            return true
        }
    })

    res.json(found)
})

app.get("/products/:id", function(req, res){
    console.log("GET /products/:id", req.params.id)

    let found = products.find(i => i._id == req.params.id)
        

    res.json(found)
})

app.post("/contacts", function(req,res){
    console.log("POST /contacts")
    let json = req.body

    let newContact = {}
    newContact._id = contacts.length + 1
    newContact.name = json.name
    newContact.occupation = json.occupation
    newContact.avatar = json.avatar

    contacts.push(newContact)

    res.json(newContact)
})

app.post("/vehicles", function(req, res){
    console.log("POST /vehicles")
    let json = req.body

    let newVehicle = {}
    newVehicle._id = vehicles.length + 1
    newVehicle.year = json.year
    newVehicle.make = json.make
    newVehicle.model = json.model

    vehicles.push(newVehicle)

    res.json(newVehicle)
})

app.post("/comments", function(req, res){
    console.log("POST /comments")
    let json = req.body

    let newComment = {}
    newComment._id = comments.length + 1
    newComment.body= json.body
    newComment.postId = 1

    comments.push(newComment)

    res.json(newComment)
})

app.post("/products", function(req, res){
    console.log("POST /products")
    let json = req.body
    
  

    let newProduct = {}
    newProduct._id = products.length + 1
    newProduct.name = json.name
    newProduct.description = json.description

    products.push(newProduct)

    res.json(newProduct)
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
