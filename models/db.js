const mongoose = require('mongoose');

const DB_NAME = 'gangsihui';
const db = mongoose.createConnection('mongodb://localhost:27017/'+DB_NAME);

db.on('error', function(error) {
    console.log(error);
});

db.once('open',function(callback){
	console.log(DB_NAME+'连接成功');
});
module.exports = db;