const express = require('express')
const router = express.Router()

let commentsController = require('../controllers/comments')


router.get("/comments", commentsController.list )
router.get("/comments/:id", commentsController.show )
router.post("/comments", commentsController.create )

module.exports = router