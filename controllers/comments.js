let comments = require('../data/comments');

let list = function(req, res){
    console.log("GET /comments")
    res.json(comments)
}

let show = function(req, res){
    console.log("GET /comments/:id", req.params.id)

    let found = comments.find(function(i){ 
        if(i._id == req.params.id){ 
            return true
        }
    })

    res.json(found)
}

let create = function(req, res){
    console.log("POST /comments")
    let json = req.body

    let newComment = {}
    newComment._id = comments.length + 1
    newComment.body= json.body
    newComment.postId = 1

    comments.push(newComment)

    res.json(newComment)
}

module.exports = {
    list,
    show,
    create
}