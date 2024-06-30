const express = require("express");
const router = express.Router();

const { projectController } = require("../../controllers");

router.get("/", projectController.getProjects);
router.post("/", projectController.createProject);
router.get("/episodes", projectController.getEpisodes);
router.post("/episodes", projectController.createEpisode);

module.exports = router;