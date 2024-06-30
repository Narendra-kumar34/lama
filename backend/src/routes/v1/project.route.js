const express = require("express");
const router = express.Router();

const { projectController } = require("../../controllers");

router.get("/", projectController.getProjects);
router.post("/", projectController.createProject);
router.get("/episodes", projectController.getEpisodes);
router.post("/episodes", projectController.createEpisode);
router.get("/transcript", projectController.getTranscript);
router.patch("/transcript", projectController.updateTranscript);
router.delete("/episode", projectController.deleteEpisode);
router.post("/configuration", projectController.saveConfiguration);
router.get("/configuration", projectController.getConfiguration);

module.exports = router;