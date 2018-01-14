var express = require('express');
var router = express.Router();
const Admin = require('../models/Admin');
const Album = require('../models/Album.js');
const Audio = require('../models/Audio.js');

router.get('/', function(req, res, next) {
  if(req.session.login){
    res.render('index');
  }else{
    res.redirect('/admin/login');
  }
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  if(req.session.login){
    res.send('您已登录!');
  }else{
    res.render('login');
  }
});

router.post('/dologin', function(req, res, next) {
  let admin = req.body;
  // console.log(admin);
  Admin.findAdmin(admin.admin,function(err,result){
      if(err) {
      console.error(err);
      console.error('服务器错误');
      res.send('-3');
      return;
    }

    if(result.password != admin.password){
     console.error('密码错误');
      res.send('-2');
      return;
   }

    if(result.password == admin.password){
      req.session.login = true;
      req.session.admin = admin.admin;
       res.send('1');
       return;
       
    }
  });
});



router.get('/albums', function(req, res, next) {
  if(req.session.login){
    Album.findAllAlbums(function(err,result){
      "use strict";
      if(err){
        console.log(err);
        return;
      }
      //console.log(result);

      res.render('album_form',{result:result});
    });

  } else{
    res.redirect('/login');
  }
});



//分页查询音频
router.get('/audios',function(req,res,next){
  if(req.session.login){
    let currentPage = 1;
    let count = 10;
    let sort = {};

    Audio.findAudiosByPage(currentPage,count,sort,function(err,result){
      if(err){
        console.log(err);
        return;
      }
      console.log(result);
      res.render('audio_form',{result:result});
    });


  }else{
    res.redirect('/login');
  }
});


router.get('/user', function(req, res, next) {
  res.render('user');
});

// 添加声音
router.get('/audio/add',function(req,res,next){
  render('audio_add');
  next();
});

router.post('/audio/add',function(req,res,next){
  res.send('成功');
});

//添加专辑
router.get('/album/add',function(req,res,next){
  res.render('album_add');
  next();
});

router.post('/album/add',function(req,res,next){
  res.send('成功');
});


router.get('/logout', function(req, res, next) {
  if(req.session.login){
    req.session.destroy();
    res.redirect('/login');
  }else{
    res.redirect('/login');
  }
});

router.get('/user', function(req, res, next) {
  res.send('用户');
  //res.render('adminUser');
});

module.exports = router;
