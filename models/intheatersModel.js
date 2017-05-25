var mongodb = require('./mongo');
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;

var IntheaterSchema=new Schema({
    _id:String,
    movie_name:String,
    introduction:String,
    type:String,
    poster:String,
    herald_img:String,
    director:String,
    actor:String,
    grade:String,
    comment_amout:String,
    herald:String,
    date:String,
    region:String,
    length:String,
    imagelist:[String],
    commentlist:[{
        content:String,
        people:String
    }]

},{collection:'Intheater'});


var intheatersModel=mongoose.model('intheatersModel',IntheaterSchema,'Intheater');
module.exports.intheatersModel=intheatersModel;





