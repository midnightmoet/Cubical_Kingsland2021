// TODO: Require Controllers...
const express = require("express");
const CubeModel = require("../models/Cube");
const User = require("../models/User");
const Accessory = require('../models/Accessory');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

	// Added the register 8/21 the get and post for /register //
	app.get("/register", function (req, res) {
		res.render("register");
	});

	app.post("/register", function(req,res){
		console.log('reg body', req.body);
		bcrypt.hash(req.body.password, 8, function(err, hash){
			//Store has in your PW DB.
			let tempuser = new User({ username:req.body.username ,password: hash });

			console.log(tempuser);
			tempuser.save();
			res.send("/register");
		});
	});

	// Used register template to do the log in login 8/21 the get and post for /login //
	app.get("/login", function (req, res) {
		res.render("login");
	});


	app.post("/login", async function(req,res){
		console.log(req.body);
		await User.findOne({ username: req.body.username }, function (err, user) {
			console.log('user found!!!', user);
			//From the bcrypt docs
			bcrypt.compare(req.body.password, user.password, function(err, result) {
				// result == true
				console.log("The password is", results);
			});
			
		});

		res.send("login post route");
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
		res.render("/create/accessory");
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