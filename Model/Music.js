const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Musicschema = new Schema({
   // {'title':'foo', 'category':'bar', 'country':'Uzbekistan', // year:1990, director:"id", imdb_score: 9.7 }
   title: {
       type: String,
       require: true,
       unique: false
   },
   category: String,
   country: String,
   year: Number,
   director_id: Schema.Types.ObjectId,
   imdb_score: Number,
   createAt: {
       type: Date,
       default: Date.now
   } 
})

module.exports = mongoose.model('music', Musicschema)