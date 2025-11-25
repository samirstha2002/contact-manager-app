const express = require("express");
const contactController = require("../controllers/contactController");
const validateToken = require("../middlewares/validateTokenHandler");

const router = express.Router();
router.use(validateToken);
router
  .route("/")
  .get(contactController.getallcontacts)
  .post(contactController.createcontact);
router
  .route("/:id")
  .get(contactController.getcontact)
  .put(contactController.updatecontact)
  .delete(contactController.deletecontact);

module.exports = router;
