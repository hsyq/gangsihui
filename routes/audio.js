const express = require('express');
const router = express.Router();
const Audio = require('../models/Audio.js');

router.get('/',function(req,res,next){
	Audio.findAll(function(err,data){
		if(err){
			console.log(err);
			return;
		}
		console.log(data);
		res.send(data);
	});
});

router.get('/read/:id', function(req, res, next) {
  const id = req.params.id;
  Audio.findOneById(id,function(err,data){
  	if(err){
  		console.log(err);
  	}
  	console.log(data);
  	console.log('查询成功');
  	res.json({
  		status:1,
  		audio:data[0]
  	});
  });
});

router.get('/getaudios',function(req,res,next){
  let currentPage = parseInt(req.query.page);
  let count = parseInt(req.query.count);
 
  let sort = {'title':1};
  Audio.findByPage(currentPage,count,sort,function(err,data){
    if(err){
      console.log(err);
      return;
    }
    console.log(data);
    res.json(data);
  });
});
module.exports = router;
