const eventsModel = require('../models/events');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
    };
    response.render('index', contextData);
}

function about(request, response) {
    const people = [
        {name: 'paul', picture: 'paul.jpeg'},
        {name: 'mert', picture: 'mert.jpeg'},
        {name: 'lesley', picture: 'lesley.jpg'},
        {name: 'mac', picture: 'mac.jpeg'},
    ];
    response.render('about', {people:people});
}
function newevent(request, response) {
    const contextData = {
    };
    response.render('newevent', contextData);
}

function events(request, response) {
  const event = eventsModel.getById(Number(request.params.id));
  console.log(event);
  response.render('event' , { event: event });
}

module.exports = {
    index, about, newevent, events
};