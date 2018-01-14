var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if(req.session.login){
    res.redirect('/admin');
  }else{
    res.redirect('/admin/login');
  }
});

module.exports = router;
