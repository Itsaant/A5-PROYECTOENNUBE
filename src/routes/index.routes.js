const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderHome, rendersem1, rendersem2, rendersem3, rendersem4 } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/home", renderHome);
router.get("/sem1", rendersem1);
router.get("/sem2", rendersem2);
router.get("/sem3", rendersem3);
router.get("/sem4", rendersem4);
module.exports = router;
