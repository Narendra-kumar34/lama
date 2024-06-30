const httpStatus = require("http-status");
const { Project } = require("../models");
const ApiError = require("../utils/ApiError");

const getProjects = async (email) => {
    const projectsObj = await Project.findOne({ email: email });
    if(projectsObj) {
        if(projectsObj.projects) {
            return projectsObj.projects;
        }
        else {
            return [];
        }
    }
    else {
        return [];
    }
};

const createProject = async (email, name) => {
    let projectsObj = await Project.findOne({ email: email });
    if(!projectsObj) {
        try {
            const projectBody = {
                email: email,
                projects: []
            };
            projectsObj = await Project.create(projectBody);
            await projectsObj.save();
        }
        catch (error){
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }
    let iconText = "";
    const nameArr = name.split(" ");
    if(nameArr.length > 1) {
        iconText = nameArr[0].charAt(0) + nameArr[1].charAt(0);
    }
    else {
        iconText = name.charAt(0) + name.charAt(1);
    }
    const colorsArr = ["#7E22CE", "#F8A01D", "#6366F1"];
    const iconColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    const project = {
        name: name,
        iconText: iconText.toUpperCase(),
        iconColor: iconColor
    };
    projectsObj.projects.push(project);
    const result = await projectsObj.save();
    return result;
};

const getEpisodes = async (email, projName) => {
    const projectsObj = await Project.findOne({ email: email });
    if(!projectsObj) {
        throw new ApiError(httpStatus.NOT_FOUND, "User don't have any projects");
    }
    const project = projectsObj.projects.find((project) => project.name === projName);
    if(!project) {
        throw new ApiError(httpStatus.NOT_FOUND, "Project is not available");
    }
    return project.episodes;
};

const createEpisode = async (email, projName, episodeName, description) => {
    const projectsObj = await Project.findOne({ email: email });
    if(!projectsObj) {
        throw new ApiError(httpStatus.NOT_FOUND, "User don't have any projects");
    }
    const project = projectsObj.projects.find((project) => project.name === projName);
    if(!project) {
        throw new ApiError(httpStatus.NOT_FOUND, "Project is not available");
    }
    const duplicate = project.episodes.find((episode) => episode.name === episodeName);
    if(duplicate) {
        throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, "Name should be unique for each episode");
    }
    const episodeBody = {
        name: episodeName,
        uploadDateTime: new Date(),
        description: description
    };
    project.episodes.push(episodeBody);
    await projectsObj.save();
    return episodeBody;
}

const getTranscript = async (email, projName, episodeName) => {
    const projectsObj = await Project.findOne({ email: email });
    if(!projectsObj) {
        throw new ApiError(httpStatus.NOT_FOUND, "User don't have any projects");
    }
    const project = projectsObj.projects.find((project) => project.name === projName);
    if(!project) {
        throw new ApiError(httpStatus.NOT_FOUND, "Project is not available");
    }
    const episode = project.episodes.find((episode) => episode.name === episodeName);
    return episode.description;
}

const updateTranscript = async (email, projName, episodeName, description) => {
    const projectsObj = await Project.findOne({ email: email });
    if(!projectsObj) {
        throw new ApiError(httpStatus.NOT_FOUND, "User don't have any projects");
    }
    const project = projectsObj.projects.find((project) => project.name === projName);
    if(!project) {
        throw new ApiError(httpStatus.NOT_FOUND, "Project is not available");
    }
    const episode = project.episodes.find((episode) => episode.name === episodeName);
    episode.description = description;
    await projectsObj.save();
    return description;
}

const deleteEpisode = async (email, projName, episodeName) => {
    const projectsObj = await Project.findOne({ email: email });
    if(!projectsObj) {
        throw new ApiError(httpStatus.NOT_FOUND, "User don't have any projects");
    }
    const project = projectsObj.projects.find((project) => project.name === projName);
    if(!project) {
        throw new ApiError(httpStatus.NOT_FOUND, "Project is not available");
    }
    const newEpisodes = project.episodes.filter((episode) => episode.name !== episodeName);
    project.episodes = newEpisodes;
    await projectsObj.save();
}

const saveConfiguration = async (email, projName, configuration) => {
    const projectsObj = await Project.findOne({ email: email });
    if(!projectsObj) {
        throw new ApiError(httpStatus.NOT_FOUND, "User don't have any projects");
    }
    const project = projectsObj.projects.find((project) => project.name === projName);
    if(!project) {
        throw new ApiError(httpStatus.NOT_FOUND, "Project is not available");
    }
    const configurationBody = JSON.parse(JSON.stringify(configuration));
    project.configuration = configurationBody;
    await projectsObj.save();
    return configurationBody;
}

const getConfiguration = async (email, projName) => {
    const projectsObj = await Project.findOne({ email: email });
    if(!projectsObj) {
        throw new ApiError(httpStatus.NOT_FOUND, "User don't have any projects");
    }
    const project = projectsObj.projects.find((project) => project.name === projName);
    if(!project) {
        throw new ApiError(httpStatus.NOT_FOUND, "Project is not available");
    }
    return project.configuration;
}

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
};