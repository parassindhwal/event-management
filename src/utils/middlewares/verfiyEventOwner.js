const { events }  =  require('../../store');

const verifyEventOwnerId = (req, res, next) => {
    const { eventId } = req.query
    const eventIndex = events.findIndex(event => event.id == eventId);
    if(eventIndex == -1) {
        return res.status(404).send({'error': 'Not Found'});
    } else {
        if(events[eventIndex].ownerId !== req.user.id) {
            return res.status(401).send({'error': 'You do not have permission to edit this event'});
        }
    }

    next();
}

module.exports = verifyEventOwnerId