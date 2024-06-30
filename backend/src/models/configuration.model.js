const mongoose = require("mongoose");

const configurationSchema = mongoose.Schema(
    {
        general: {
            chatbotName: {
                type: String,
                default: ""
            },
            welcomeMessage: {
                type: String,
                default: ""
            },
            inputPlaceholder: {
                type: String,
                default: ""
            },
        },
        display: {
            primaryColor: {
                type: String,
                default: "#7BD568"
            },
            fontColor: {
                type: String,
                default: "#3C3C3C"
            },
            fontSize: {
                type: String,
                default: ""
            },
            chatHeight: {
                type: String,
                default: ""
            },
            showSources: {
                type: Boolean,
                default: false
            },
            chatIconSize: {
                type: String,
                default: "Small (48x48 px)"
            },
            positionOnScreen: {
                type: String,
                default: "Bottom Right"
            },
            distanceFromBottom: {
                type: String,
                default: ""
            },
            horizontalDistance: {
                type: String,
                default: ""
            },
        }
    },
    {
        timestamps: false
    }
);

module.exports.configurationSchema = configurationSchema;