// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('loc', {
    email: {type : String, default: ''},
    latitude:{type: Number,default:0.00},
    longitude:{type:  Number,default:0.00},
    time:{type: Date, default:Date.now}
},'location');
