const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    'UserName':String,
    'firstName':String,
    'email':String,
    'passWord':String,
    'avatar':String,
    'createdAt':{type:Date , default:Date.now()}
});

module.exports = mongoose.model('User', UserSchema);