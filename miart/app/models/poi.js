var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PoiSchema   = new Schema({
    name: String,
    location:String,
   	lat:String,
   	lon:String
});

module.exports = mongoose.model('pois', PoiSchema);