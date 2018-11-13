// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
        title: 'Eventbrite clone project starter',
        salutation: 'Hello Yale SOM hackers',

    };
    response.render('index', contextData);
}

function about(request, response) {
    const people = [
        {name: 'paul', picture: 'PAUL.jpeg'},
        {name: 'Mert', picture: 'Mert.jpeg'},
        {name: 'Lesley', picture: 'LESLEY.jpg'},
        {name: 'Mac', picture: 'Mac.jpeg'},
    ];
    response.render('about', {people:people});
}
module.exports = {
    index, about
};
