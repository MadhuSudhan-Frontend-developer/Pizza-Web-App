// server\models\registration.js

const mongoose = require('mongoose');

// Define the registration schema
const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure email is unique
    },
    password: {
        type: String,
        required: true
    }
});

// Export the registration model
module.exports = mongoose.model('Registration', registrationSchema);
