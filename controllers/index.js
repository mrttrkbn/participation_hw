const eventsModel = require('../models/events.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
    };
    response.render('index', contextData);
}

function about(request, response) {
    const people = [
        { name: 'Paul', picture: 'paul.jpeg' },
        { name: 'Mert', picture: 'mert.jpeg' },
        { name: 'Lesley', picture: 'lesley.jpg' },
        { name: 'Mac', picture: 'mac.jpeg' },
    ];
    response.render('about',{people:people});
}

function newevent(request, response) {
    const contextData = {
        errors: [],
    };
    if (request.method === 'POST') {
        console.log('This is a post request');
        console.log(request.body);
        const errors = [];
        const theEvent = request.body;
        theEvent.id = eventsModel.getMaxId() + 1;
        if (!theEvent.title || theEvent.title.length > 50) {
            errors.push('This is a bad title');
        }
        // TEST OTHER THINGS!!!
        if (errors.length === 0) {
            console.log('The new event is', theEvent);
            eventsModel.all.push(theEvent);
            return response.redirect('/events/' + theEvent.id);
        }
        contextData.errors = errors;
    } else {
        console.log('This is a get request');
    }
    return response.render('newevent', contextData);
}

function events(request, response) {
    const event = eventsModel.getById(Number(request.params.id));
    console.log(event);
    response.render('event', { event: event() });
}

module.exports = {
    index, about, newevent, events,
};
