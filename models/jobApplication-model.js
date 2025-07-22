const { Schema, model } = require('mongoose');

const jobApplySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    message: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
})

const JobApply = new model('JobApply', jobApplySchema);
module.exports = JobApply;