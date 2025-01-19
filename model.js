const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    name: String,
}, { collection: 'user_auth' });

const User = mongoose.model('User', userSchema);

module.exports = User;