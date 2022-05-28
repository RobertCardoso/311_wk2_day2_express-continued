let vehicles = require('../data/vehicles')

let list = function(req, res){
    console.log("GET /vehicles")
    res.json(vehicles)
}

let show = function(req, res){
    console.log("GET /vehicles/:id", req.params.id)
    
    let found = vehicles.find(function(i){ 
        if(i._id == req.params.id){ 
            return true
        }
    })

    res.json(found)
}

let create = function(req, res){
    console.log("POST /vehicles")
    let json = req.body

    let newVehicle = {}
    newVehicle._id = vehicles.length + 1
    newVehicle.year = json.year
    newVehicle.make = json.make
    newVehicle.model = json.model

    vehicles.push(newVehicle)

    res.json(newVehicle)
}

module.exports = {
    list,
    show,
    create
}