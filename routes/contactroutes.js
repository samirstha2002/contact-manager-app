const express = require("express");
const contactController=require('../controllers/contactController')


const router = express.Router();

router.route("/").get(contactController.getallcontacts).post(contactController.createcontact);
router.route("/:id").get(contactController.getcontact).put(contactController.updatecontact).delete(contactController.deletecontact);

module.exports = router;
