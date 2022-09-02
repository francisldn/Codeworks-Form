const {Router} = require('express');
const router = Router();
const {getEvents, postEvent} = require('./controllers/controller');

router.get('/events',getEvents);
router.post('/events',postEvent);

module.exports= router;
