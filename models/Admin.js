const mongoose = require('mongoose');
const db = require('./db.js');

const adminSchema = new mongoose.Schema({
	admin:{type:String},
	password:{type:String}
});

adminSchema.statics.findAdmin = function(admin,callback){
	this.model('Admin').findOne({"admin":admin},callback);
}

const adminModel = db.model('Admin',adminSchema);
module.exports = adminModel;