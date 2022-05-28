const express = require('express')
const router = express.Router()

let vehiclesController = require('../controllers/vehicles')

router.get("/vehicles", vehiclesController.list )
router.get("/vehicles/:id", vehiclesController.show)
router.post("/vehicles", vehiclesController.create)

module.exports = router