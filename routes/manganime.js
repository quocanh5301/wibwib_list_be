const express = require('express');
const manganimeController = require('../controllers/manganime');
const router = express.Router();

router.get("/getAll", manganimeController.getManganimeList)
// router.post

module.exports = router;