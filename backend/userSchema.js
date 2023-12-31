const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    pass: Number
});

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;