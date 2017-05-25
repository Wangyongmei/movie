/**
 * Created by user1 on 2017/4/28.
 */

var express = require('express');
var router = express.Router();
var intheaterCtrl = require('../controller/intheaters');

router.get('/intheaters',intheaterCtrl.intheaterlist);
router.get('/coming',intheaterCtrl.cominglist);

module.exports = router;