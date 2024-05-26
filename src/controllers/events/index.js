const { events } = require('../../store');
const uuid4 = require('uuid4');
const sendEmail = require('../../utils/helpers/sendEmail')
require('dotenv').config();

const createEvent = (req, res) => {
    try {
        events.push({
            id: uuid4(),
            ownerId: req.user.id,
            eventName: req.body.eventName,
            date: req.body.date,
            startTime: req.body.startTime,
            description: req.body.description,
            participantList: []
        })
        return res.status(201).send({'message': 'Event created'})
    } catch (err) {
        return res.status(500).send(err)
    }
}

const allEvents = (req, res) => {
    return res.status(200).send(events)
}

const editEvent = (req, res) => {
    try {
        const { eventId } = req.query;
        const event = events.findIndex(event => event.id == eventId);
        events[event] = {
            ...events[event],
            eventName: req.body.eventName,
            date: req.body.date,
            startTime: req.body.startTime,
            description: req.body.description,
        }
    
        return res.status(200).send(events[event])
    } catch (err) {
        return res.status(500).send(err)
    }
}

const deleteEvent = (req, res) => {
    try {
        const { eventId } = req.query;
        events = events.filter(event => event.id != eventId);
    
        return res.status(200).send({"message": "Event deleted successfully"})
    } catch (err) {
        return res.status(500).send(err)
    }

}

const eventRegistration = async (req, res) => {
    try {
        const eventId = req.params.id

        const event = events.findIndex(event => event.id == eventId);
        if(events[event].ownerId == req.user.id) {
            return res.status(400).send({"message": "Owner cannot register"})
        }
        events[event].participantList.push(req.user.id)
        sendEmail(req.user, events[event].eventName).then(() =>{}).catch((err) => {
            console.log(err);
        });
          
        return res.status(200).send({"message": "Registration successful"})
    } catch (err) {
        return res.status(500).json(err)
    }
    
}

module.exports = {
    createEvent,
    allEvents,
    editEvent,
    deleteEvent,
    eventRegistration
}