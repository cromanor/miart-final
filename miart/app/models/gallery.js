var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GallerySchema   = new Schema({
    name: String,
    location:String,
   	lat:String,
   	lon:String,
   	arts:Array
});

module.exports = mongoose.model('Gallery', GallerySchema);