const router = require("express").Router();
import { userController } from "../routes-handller";

router.post("/register", userController.userRegister);
router.post("/login", userController.userLogin);

module.exports = router;
