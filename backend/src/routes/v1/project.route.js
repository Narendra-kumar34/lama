const express = require("express");
const router = express.Router();

const { projectController } = require("../../controllers");

router.get("/", projectController.getProjects);
router.post("/", projectController.createProject);

module.exports = router;