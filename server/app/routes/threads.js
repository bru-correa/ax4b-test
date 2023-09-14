const controllers = require("../controllers/threads.js");
const router = require("express").Router();

router.get("/:id", controllers.getThread);

module.exports = router;
