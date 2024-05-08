const express = require('express')
const router = express.Router();
const bookController = require('../controller/bookController');


router.get("/",bookController.getBook)

module.exports = router;