/**
 * Created by user1 on 2017/4/28.
 */
var mongoose = require('mongoose');
var intheatersModel =require('../models/intheatersModel').intheatersModel;
var comingModel=require('../models/comingModel').comingModel;

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.intheaterlist = function (req, res) {
    intheatersModel.find().exec(function (err, data) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
            return;
        }
        sendJSONresponse(res, 200, eval(data));
    });
}


module.exports.cominglist = function (req, res) {
    comingModel.find().exec(function (err, data) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
            return;
        }
        sendJSONresponse(res, 200, eval(data));
    });
}





