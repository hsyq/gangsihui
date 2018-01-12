const express = require('express');
const router = express.Router();
const Album = require('../models/Album.js');
const Audio = require('../models/Audio.js');

// 获取所有专辑
router.get('/',function(req,res,next){
  // res.send("chenggong");
 Album.findAllAlbums(function(err,result){
    if(err){
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

// 获取单个专辑
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  Album.findOneAlbumById(id,function(err,result){
  	if(err){
  		console.log(err);
  	}
  	console.log(result);
  	console.log('查询成功');
  	res.json({
  		status:1,
  		audio:result[0]
  	});
  });
});

// 获取特定专辑的所有声音
router.get('/:id/audios',function(req,res,next){
  const id = req.params.id;
  Audio.findAllByAlbum_id(id,function(err,result){
    if(err){
      console.log(err);
    }
    //console.log(result);
    //const dataStr = result.join('');
    //console.log(dataStr);
    //const dataJson = JSON.parse(dataStr);


    //console.log(dataJson);
    res.json(result);
  });

});

// 获取单个声音
router.get('/:id/audio/:aid',function(req,res,next){
  const id= req.params.id;
  const aid = req.params.aid;
  Audio.findOneAudioByAudio_aid(id,aid,function(err,result){
    if(err){
      console.log(err);
    }
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
