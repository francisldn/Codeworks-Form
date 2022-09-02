const Event = require('../models/model');

const getEvents = async (req, res) => {
  try {
    const data = await Event.find({});
    res.send(data);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }   

};

const postEvent = async (req, res) => {
  try {
    const {title, date, venue} = req.body;
    // data consist of title, date and venue
    await Event.create({title, date, venue});
    res.json('success');
    res.status(201);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
}; 

module.exports = {getEvents, postEvent};