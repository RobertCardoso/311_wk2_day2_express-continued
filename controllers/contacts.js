const contacts = require('../data/contacts') // PERGUNTAR AO PROFESSOR PQ ENTRE CHAVES {} NAO FUNCIONOU

let list = function(req, res){
    console.log("GET /contacts")
    res.json(contacts)
}

let show = function(req, res){
    console.log("GET /contacts/:id", req.params.id)

    let found = contacts.find(function(i){   //obj => obj._id == req.params.id
        if(i._id == req.params.id){ //PERGUNTAR AO PROFESSOR PQ 3 IGUAIS NAO FUNCIONOU  
            return true
        }
    })

    res.json(found)
}

let create = function(req,res){
    console.log("POST /contacts")
    let json = req.body

    let newContact = {}
    newContact._id = contacts.length + 1
    newContact.name = json.name
    newContact.occupation = json.occupation
    newContact.avatar = json.avatar

    contacts.push(newContact)

    res.json(newContact)
}


module.exports = {
    list,
    show,
    create
}