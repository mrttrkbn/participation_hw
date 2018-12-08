const eventsModel = require('../models/events');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = eventsModel.all;
    response.render('index', { contextData: contextData });
}

function Createanevent(request, response) {
    const contextData = {
    };
    response.render('Createanevent', contextData);
}

function about(request, response) {
    const people = [
        { name: 'Paul', picture: 'paul.jpeg' },
        { name: 'Mert', picture: 'mert.jpeg' },
        { name: 'Lesley', picture: 'lesley.jpg' },
        { name: 'Mac', picture: 'mac.jpeg' },
    ];
    response.render('about', { people: people() });
}

function newevent(request, response) {
    const contextData = {
        errors: [],
    };
    if (request.method === 'POST') {
        console.log('This is a post request');
        const errors = [];
        const theEvent = request.body;
        theEvent.id = eventsModel.getMaxId() + 1;
        if (!theEvent.title || theEvent.title.length > 50) {
            errors.push('This is a bad title');
        }
        // TEST OTHER THINGS!!!
        if (errors.length === 0) {
            const tempID = eventsModel.all.length;
            theEvent.id = tempID;
            eventsModel.all.push(theEvent);
            return response.redirect('/events/' + tempID);
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
    response.render('event', { event: event });
}

function donate(request, response) {
    const contextData = {
    };
    response.render('donate', contextData);
}

function neweventperson(request, response) {
    const theEvent = request.body;
    const event = eventsModel.getById(Number(request.params.id));
    console.log('theEvent', event);
    event.email = theEvent.email;
    return response.render('event', { event: event });
}
module.exports = {
    index, about, newevent, events, Createanevent, donate, neweventperson,
};
