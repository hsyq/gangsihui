var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if(req.session.login){
    res.render('index');
  }else{
    res.redirect('/login');
  }
});

module.exports = router;
