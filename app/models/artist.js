var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ArtistSchema   = new Schema({
    name: String,
    location:String,
    age:Number,
    style:String,
    Bio:String,
});

module.exports = mongoose.model('ArtistSchema', ArtistSchema);