const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { projectService } = require("../services");

const getProjects = catchAsync(async (req, res) => {
    const projects = await projectService.getProjects(req.body.email);
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

// const getProjectByName = catchAsync(async (req, res) => {
//     const project = await projectService.getProjectByName(req.body.email, req.params.projectName);
//     if(!project) {
//         throw new ApiError(httpStatus.NOT_FOUND, "The project doesn't exist");
//     }
//     res.send();
// })

const createProject = catchAsync(async (req, res) => {
    const project = await projectService.createProject(req.body.email, req.body.name);
    res.status(201).send(project);
});

module.exports = {
    getProjects,
    createProject
}