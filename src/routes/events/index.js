const router = require('express').Router();
const { createEvent, allEvents, editEvent, deleteEvent, eventRegistration } = require('../../controllers/events');
const verifyEventOwnerId = require('../../utils/middlewares/verfiyEventOwner')
const { validateEventDetails } = require('../../utils/validators')

router.post('/', validateEventDetails, createEvent) 

router.get('/', allEvents)

router.put('/', verifyEventOwnerId, editEvent)

router.delete('/', verifyEventOwnerId, deleteEvent)

router.post('/:id/register', eventRegistration)

module.exports = router