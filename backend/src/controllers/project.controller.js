const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { projectService } = require("../services");

const getProjects = catchAsync(async (req, res) => {
    const projects = await projectService.getProjects(req.headers.email);
    let projDetails = [];
    if(projects.length > 0) {
        projDetails = projects.map((project) => ({
            name: project.name,
            episodesCount: project.episodesCount,
            iconText: project.iconText,
            iconColor: project.iconColor
        }))
    }
    res.status(200).send(projDetails);
});

const createProject = catchAsync(async (req, res) => {
    const project = await projectService.createProject(req.body.email, req.body.name);
    res.status(201).send(project);
});

const getEpisodes = catchAsync(async (req, res) => {
    const episodes = await projectService.getEpisodes(req.headers.email, req.headers.name);
    let episodesArr = [];
    if(episodes.length > 0) {
        episodesArr = episodes.map((episode) => ({
            name: episode.name,
            uploadDateTime: episode.uploadDateTime
        }));
    }
    res.status(200).send(episodesArr);
});

const createEpisode = catchAsync(async (req, res) => {
    const episode = await projectService.createEpisode(req.body.email, req.body.name, req.body.episodeName, req.body.description);
    res.status(201).send(episode);
})

module.exports = {
    getProjects,
    createProject,
    getEpisodes,
    createEpisode
}