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
});

const getTranscript = catchAsync(async (req, res) => {
    const transcript = await projectService.getTranscript(req.headers.email, req.headers.name, req.headers.episodename);
    res.status(200).send(transcript);
});

const updateTranscript = catchAsync(async (req, res) => {
    const transcript = await projectService.updateTranscript(req.body.email, req.body.name, req.body.episodeName, req.body.description);
    res.status(201).send(transcript);
});

const deleteEpisode = catchAsync(async (req, res) => {
    await projectService.deleteEpisode(req.headers.email, req.headers.name, req.headers.episodename);
    res.status(204).send();
});

const saveConfiguration = catchAsync(async (req, res) => {
    const configuration = await projectService.saveConfiguration(req.body.email, req.body.name, req.body.configuration);
    res.status(201).send(configuration);
});

const getConfiguration = catchAsync(async (req, res) => {
    const configuration = await projectService.getConfiguration(req.headers.email, req.headers.name);
    res.status(200).send(configuration);
});

module.exports = {
    getProjects,
    createProject,
    getEpisodes,
    createEpisode,
    getTranscript,
    updateTranscript,
    deleteEpisode,
    saveConfiguration,
    getConfiguration
}