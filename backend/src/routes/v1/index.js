const express = require("express");
const router = express.Router();

const projectRoute = require("./project.route");

router.use("/projects", projectRoute);

module.exports = router;