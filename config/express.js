const express = require('express');
const hbs = require('express-handlebars');
//const bodyParser = require('body-parser');

module.exports = (app) => {
	//Setting up view engine to hbs, engine compiles views and data into HTML
	app.engine('hbs', hbs({
        extname: '.hbs'
    }));

    app.set('view engine', 'hbs');

    //TODO: Setup the body parser (this is actually included in express so used this coding.
    app.use(express.urlencoded({ extended: false }));

    //TODO: Setup the static files
    app.use('/static', express.static('static'));


};

// ---- Changed 8/22, just added commentary -- //