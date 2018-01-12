const mongoose = require('mongoose');
const db = require('./db.js');

const idsSchema = new mongoose.Schema({
	id:{type:Number},  // 音频id
	name:{type:String},  // 音频标题
});

idsSchema.statics.findAll = function(callback){
	this.model('Audio').find(callback);
}

const idsModel = db.model('Audio',idsSchema);
module.exports = idsModel;