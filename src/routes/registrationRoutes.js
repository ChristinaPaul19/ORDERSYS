const router = require("express").Router();

const registrationController = require("../controllers/registrationController");
const {
  validateRegistration
} = require("../middleware/validation");

router.post(
  "/",
  validateRegistration,
  registrationController.create
);

router.get("/", registrationController.getAll);
router.get("/:id", registrationController.getOne);

router.put(
  "/:id",
  validateRegistration,
  registrationController.update
);

router.delete("/:id", registrationController.remove);

module.exports = router;