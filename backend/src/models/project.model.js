const mongoose = require("mongoose");
const { singleProjectSchema } = require("./singleProject.model");

const projectSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        projects: [singleProjectSchema]
    },
    {
        timestamps: false,
    }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = {
    Project
}