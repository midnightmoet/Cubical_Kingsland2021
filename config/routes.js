// TODO: Require Controllers...
const express = require("express");
const Cube = require("../models/Cube");

module.exports = (app) => {
	// TODO...
	app.get("/", function (req, res) {
		res.render("index");
	});

	app.get("/about", function (req, res) {
		res.render("about");
	});

	app.get("/create", function (req, res) {
		res.render("create");
	});

	app.post("/create", function (req, res) {
		console.log(req.body);
		const newCube = new Cube({
			name: req.body.name,
			difficultyLevel: req.body.difficultyLevel,
			description: req.body.description,
			imageUrl: req.body.imageUrl,
		});
		console.log(newCube);
		newCube.save(function (err, newCube) {
			if (err) return console.error(err);
			console.log("Cube saved.");
		});
		res.send("Form submitted");
	});

	app.get("/details", function (req, res) {
		res.render("details");
	});

	app.get("/details/:id", function (req, res) {
		// res.render('details/:id')
		res.send(`<h1> No data yet, id is ${req.params.id} </h1>`);
	});

	app.get("/*", function (req, res) {
		res.render("404");
	});
};