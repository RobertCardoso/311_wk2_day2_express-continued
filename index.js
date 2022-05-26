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
    console.log("/GET /contacts/:id", req.params.id)

    let found = contacts.find(function(i){   //obj => obj._id == req.params.id
        if(i._id == req.params.id){ //PERGUNTAR AO PROFESSOR PQ 3 IGUAIS NAO FUNCIONOU  
            return true
        }
    })

    res.json(found)
})

app.get("/vehicles/:id", function(req, res){
    console.log("/GET /vehicles/:id", req.params.id)
    
    let found = vehicles.find(function(i){ 
        if(i._id == req.params.id){ 
            return true
        }
    })

    res.json(found)
})

app.get("/comments/:id", function(req, res){
    console.log("/GET /comments/:id", req.params.id)

    let found = comments.find(function(i){ 
        if(i._id == req.params.id){ 
            return true
        }
    })

    res.json(found)
})

app.get("/products/:id", function(req, res){
    console.log("/GET /products/:id", req.params.id)

    let found = products.find(i => i._id == req.params.id)
        

    res.json(found)
})

app.post("/contacts", function(req,res){
    console.log("/POST /contacts")
    let json = req.body
    
    let newContact = {}
    newContact._id = contacts.lengh + 1
    newContact.name = json.name
    newContact.occupation = json.occupation
    newContact.avatar = json.avatar

    contacts.push(newContact)

    res.json(newContact)



})


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
