const CatchAsync = require("../utils/CatchAsync");
const { projectService } = require("../services");

const getProjects = CatchAsync(async (req, res) => {
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

const createProject = CatchAsync(async (req, res) => {
    const project = await projectService.createProject(req.body.email, req.body.name);
    res.status(201).send(project);
});

const getEpisodes = CatchAsync(async (req, res) => {
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

const createEpisode = CatchAsync(async (req, res) => {
    const episode = await projectService.createEpisode(req.body.email, req.body.name, req.body.episodeName, req.body.description);
    res.status(201).send(episode);
});

const getTranscript = CatchAsync(async (req, res) => {
    const transcript = await projectService.getTranscript(req.headers.email, req.headers.name, req.headers.episodename);
    res.status(200).send(transcript);
});

const updateTranscript = CatchAsync(async (req, res) => {
    const transcript = await projectService.updateTranscript(req.body.email, req.body.name, req.body.episodeName, req.body.description);
    res.status(201).send(transcript);
});

const deleteEpisode = CatchAsync(async (req, res) => {
    await projectService.deleteEpisode(req.headers.email, req.headers.name, req.headers.episodename);
    res.status(204).send();
});

const saveConfiguration = CatchAsync(async (req, res) => {
    const configuration = await projectService.saveConfiguration(req.body.email, req.body.name, req.body.configuration);
    res.status(201).send(configuration);
});

const getConfiguration = CatchAsync(async (req, res) => {
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