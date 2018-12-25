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
function newyorkalbum(request, response) {
    const contextData = {
    };
    response.render('newyorkalbum', contextData);
}
function yalesomalbum(request, response) {
    const contextData = {
    };
    response.render('yalesomalbum', contextData);
}
function concertalbum(request, response) {
    const contextData = {
    };
    response.render('concertalbum', contextData);
}
function libraryalbum(request, response) {
    const contextData = {
    };
    response.render('libraryalbum', contextData);
}


module.exports = {
    index, about, newyorkalbum, yalesomalbum, concertalbum, libraryalbum,
};