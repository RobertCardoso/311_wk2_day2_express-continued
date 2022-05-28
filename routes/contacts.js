const express = require('express')
const router = express.Router()

let contactsController = require('../controllers/contacts')


router.get("/contacts", contactsController.list)
router.get("/contacts/:id", contactsController.show)
router.post("/contacts", contactsController.create)

module.exports = router