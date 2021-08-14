//  Original code, working! 
const express = require("express");
const handlebars = require("express-handlebars");
//const bodyParser = require("body-parser");

module.exports = (app) => {
	//TODO: Setup the view engine
	app.set("view engine", "hbs");
	app.engine(
		"hbs",
		handlebars({
			extname: "hbs",
			defaultLayout: "",
			layoutsDir: __dirname + "/views",
			partialsDir: __dirname + "/views",
		})
	);

	//TODO: Setup the body parser (something to do with forms, built into Express, don't worry about it!)

	//TODO: Setup the static files
	app.use(express.static("static"));
};