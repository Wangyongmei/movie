var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('../', function(req, res, next) {
    res.render('index');
});

router.get('/movie',function(req,res,next){
   res.render('movie');
})


router.get('/box',function(req,res,next){
    res.render('box');
})

router.get('/details/:id',function(req,res,next){
    res.render('details');
})

router.get('../details/:id',function(req,res,next){
    res.render('details');
})

router.get('/details2/:id',function(req,res,next){
    res.render('details2');
})

module.exports =router;
