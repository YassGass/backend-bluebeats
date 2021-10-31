const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    'name':String,
    'description':String,
    'price':Number,
    'Stock':Number,
    'image':String,
    'userId':{
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    'createdAt':{type:Date , default:Date.now()}
});

module.exports = mongoose.model('Product', ProductSchema);