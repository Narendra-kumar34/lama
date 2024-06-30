const mongoose = require("mongoose");
const { configurationSchema } = require("./configuration.model");

const singleProjectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        episodesCount: {
            type: Number,
            default: 0
        },
        iconText: {
            type: String,
            required: true
        },
        iconColor: {
            type: String,
            required: true
        },
        episodes: [
            {
                name: {
                    type: String,
                    required: true
                },
                uploadDateTime: {
                    type: String,
                    required: true
                },
                description: {
                    type: String,
                    required: true
                }
            }
        ],
        configuration: configurationSchema,
    },
    {
        timestamps: true,
    }
);

module.exports.singleProjectSchema = singleProjectSchema;