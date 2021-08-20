// TODO: Require Controllers...
const express = require("express");
const CubeModel = require("../models/Cube");
const AccessoryModel = require('../models/Accessory');

module.exports = (app) => {
	// TODO...
	app.get("/",  async  function (req, res) {
		await CubeModel.find(function (err, cubes){
			if(err) return console.error(err);
			console.log(cubes);
		res.render("index", { cubes });
		});
	});

	app.get("/about", function (req, res) {
		res.render("about");
	});

	app.get("/create", function (req, res) {
		res.render("create");
	});

	app.post("/create", function (req, res) {
		console.log(req.body);
		const newCube = new CubeModel({
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
		//res.send("Form submitted");
		res.redirect(301, "/");

	});

	app.get("/details", function (req, res) {
		res.render("details");
	});

	app.get("/details/:id", async function (req, res) {
		// find by id, then pass to template
		await CubeModel.findById(req.params.id).then((cube) => {
			console.log(cube);
			res.render("details", { cube });
		});
	});


	app.get("/create/accessory", function (req, res) {
		res.send(`<h1> No CREATE ACCESSORY data yet, id is ${req.params.id} </h1>`);
		res.render("create/accessory");
	});

	app.post("/create/accessory", function (req, res) {
		const newAccessory = new AccessoryModel(req.body);
		newAccessory.save(function (err, newCube) {
			console.log("A new accessory has been saved");
		});
		res.redirect(301, "/");
	});


	app.get("/attach/accessory/:id", function (req, res) {
		res.send(`<h1> No ATTACH ACCESSORY data yet, id is ${req.params.id} </h1>`);
	});


	app.get("/*", function (req, res) {
		res.render("404");
	});
};