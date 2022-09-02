const mongoose = require('./db');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {type:String, required:true},
  date: {type:Date, required:true},
  venue: {type:String, required: true}
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;