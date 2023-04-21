const router = require("express").Router();
const userRouters = require("./user.js");
const reflectionRouters = require("./reflection.js");
const authentication = require("../middleware/auth.js");

router.use("/users", userRouters);

router.use(authentication);

router.use("/reflection",reflectionRouters)

module.exports = router;