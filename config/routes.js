const express = require("express");
const CubeModel = require("../models/Cube");
const AccessoryModel = require("../models/Accessory");
const User = require("../models/User");
const { restart } = require("nodemon");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 8;

module.exports = (app) => {
	app.get("/",  async  function (req, res) {
		await CubeModel.find(function (err, cubes){
			if(err) return console.error(err);
			console.log(cubes);
		res.render("index", { cubes, title: "Midnightmoets Cube" });
		});
	});

	// --  ABOUT -- CAN PUT IN CONTROLLER, and import it 8/21 .. do later with ALL of them --- // 
	app.get("/about", function (req, res) {
		res.render("about");
	});

	app.get("/create", function (req, res) {
		res.render("create");
	});
// Changed to simplify this app.post 8/22
	app.post("/create", function (req, res) {
		console.log(req.body);
		const newCube = new CubeModel(req.body);
		newCube.save(function(err, newCube) {
			console.log("A new cube has been saved!!");
		});
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
			let tempuser = new User({ 
				username:req.body.username ,
				password: hash 
			});

			console.log(tempuser);
			tempuser.save();
			res.send("/login");
		});
	});


	// Used register template to do the log in login 8/21 the get and post for /login //
	app.get("/login", function (req, res) {
		res.render("login");
	});


    app.post("/login", async function (req, res) {
		console.log(req.body);
		await User.findOne(
			{ username: req.body.username },
			function (err, user) {
				console.log("User found!!", user);
				bcrypt.compare(
					req.body.password,
					user.password,
					function (err, result) {
						console.log("The password result is", result);
					}
				);
				const token = jwt.sign({ id: user._id }, "Big Secret", {
					expiresIn: "2d",
				});
				console.log(token);
				res.cookie("token", token);
			}
		);
		res.redirect("/");
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
		//res.send(`<h1> No CREATE ACCESSORY data yet, id is ${req.params.id} </h1>`);
		res.render("createAccessory");
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


	app.get("/*", (req, res) => {
		res.render("404");
	});		
};

// When trying to log in it throws an error of User found! null.  TypeError: Cannot read property 'password' of null.  Will find and correct. 8/22 ~ midnightmoet --//