const express = require('express');
const registerController = require('../controllers/register');
const router = express.Router();

router.post("/registerEmail", registerController.registerAccount);
router.use("/confirmEmail", registerController.confirmEmail);

module.exports = router;