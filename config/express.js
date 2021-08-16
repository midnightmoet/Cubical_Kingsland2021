const express = require('express');
const hbs = require('express-handlebars');

module.exports = (app) => {
	//TODO: Setup the view engine
	//TODO: Setup the body parser (something to do with forms, built into Express, don't worry about it!)
	//TODO: Setup the static files
	app.engine('hbs', hbs({
        extname: '.hbs'
    }));

    app.set('view engine', 'hbs');
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: false }));
};