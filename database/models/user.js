const mongoose = require('mongoose');

mongoose.set('strictQuery', 'true');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    age: {
        required: true,
        type: Number,
    }
});

module.exports = mongoose.model('User', userSchema)