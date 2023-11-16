const express = require('express');
const authenticateController = require('../controllers/authenticate');
const router = express.Router();

router.get("/login", authenticateController.logIn);
router.get("/refreshToken", authenticateController.refreshToken);
// router.get("/logout", authenticateController.);

module.exports = router;