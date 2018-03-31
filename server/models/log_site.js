const mongoose = require('mongoose');

var log_site = mongoose.model('Site', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    url: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    entryDate: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        default: null
    }
});

module.exports = {log_site};