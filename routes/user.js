var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.login){
    res.render('index');
  }else{
    res.redirect('/login');
  }
});


module.exports = router;
