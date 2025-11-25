const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();
const validateToken = require("./../middlewares/validateTokenHandler");
router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/current", validateToken, userController.currentUser);
module.exports = router;
