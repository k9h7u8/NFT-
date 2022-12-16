const mongoose = require('mongoose');

//Forn schema
const userDetails = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    father_name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year_of_completion: {
        type: Number,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    createdAt:
    {
        type: Date,
        default: Date.now
    },
    updateddAt:
    {
        type: Date,
        default: Date.now
    },
});

//Forn model
const form = mongoose.model("details", userDetails);

module.exports = form;
