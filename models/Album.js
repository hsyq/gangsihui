const mongoose = require('mongoose');
const db = require('./db.js');

const albumSchema = new mongoose.Schema({
	album_id:{type:Number},  // 专辑id
	album_name:{type:String},  // 该专辑标题
	album_desc:{type:String}, // 该专辑内音频数量
	album_num:{type:Number}   // 该专辑内音频数量
});

albumSchema.statics.findAllAlbums = function(callback){
	this.model('Album').find(callback);
}

albumSchema.statics.findOneAlbumById = function(id,callback){
	this.model('Album').find({album_id:id},callback);
}

const albumModel = db.model('Album',albumSchema);
module.exports = albumModel;