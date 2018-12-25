// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    response.render('index', {
        title: 'Welcome to my blog',
    });
}

function about(request, response) {
    const contextData = {
    };
    response.render('about', contextData);
}

module.exports = {
    index, about
};