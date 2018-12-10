const eventsModel = require('../models/events');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = eventsModel.all;
    response.render('index', { contextData: contextData });
}

function neweventperson(request, response) {
    const contextData = {
    };
    response.render('neweventperson', contextData);
}

function about(request, response) {
    const people = [
        { name: 'Paul', picture: 'paul.jpeg' },
        { name: 'Mert', picture: 'mert.jpeg' },
        { name: 'Lesley', picture: 'lesley.jpg' },
        { name: 'Mac', picture: 'mac.jpeg' },
    ];
    response.render('about', { people: people });
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
        if (!theEvent.location || theEvent.location.length > 50) {
            errors.push('This is a bad location');
        }
        if (!theEvent.image || !endsWithAny(['.jpg', '.png', '.gif'], theEvent.image)) {
            errors.push('This is a bad image');
        }
        if (errors.length === 0) {
            const tempID = eventsModel.all.length;
            theEvent.id = tempID;
            theEvent.attending = [];
            theEvent.date = new Date(theEvent.year, theEvent.month, theEvent.day, theEvent.hour, theEvent.minute, 0);
            eventsModel.all.push(theEvent);
            return response.redirect('/events/' + tempID);
        }
        contextData.errors = errors;
    } else {
        console.log('This is a get request');
    }
    return response.render('neweventperson', contextData);
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

function neweventemail(request, response) {
    const theEvent = request.body;
    const event = eventsModel.getById(Number(request.params.id));
    console.log('theEvent', event);
    event.email = theEvent.email;
    return response.render('event', { event: event });
}
module.exports = {
    index, about, newevent, events, neweventperson, donate, neweventemail,
};

//check if string ends with any of array suffixes
function endsWithAny(suffixes, string) {
    for (let suffix of suffixes) {
        if(string.endsWith(suffix))
            return true;
    }
    return false;
}
