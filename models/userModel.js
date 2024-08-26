const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'User name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    address: {
        type: Array,
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
    },
    usertype: {
        type: String,
        required: [true, 'User type is required'],
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver'],
    },
    profile: {
        type: String,
        default: 'https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?w=208&h=200&c=7&r=0&o=5&dpr=2&pid=1.7',
    },
}, { timestamps: true });

// Export
module.exports = mongoose.model('User', userSchema);
