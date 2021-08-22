const express = require("express"); //remember express is a package, do npm install per docs
const CubeModel = require("../models/Cube");
const AccessoryModel = require("../models/Accessory");
const User = require("../models/User");
const { restart } = require("nodemon"); //seen this on SP code and added it 8/21
const bcrypt = require("bcrypt"); // added bcrypt and did the install for it, its a package
const jwt = require("jsonwebtoken"); // added jsonwebtoken and did the install for it, its a package
const saltRounds = 8; // added saltRounds and gave it 8 rounds which is simple, not time consuming

module.exports = (app) => {

//--- homepage/browser page --- //
	app.get("/",  async  function (req, res) {
		await CubeModel.find(function (err, cubes){
			if(err) return console.error(err);
			console.log(cubes);
		res.render("index", { cubes, title: "Midnightmoet's Cube" });
		});
	});

	// --  ABOUT -- CAN PUT IN CONTROLLER, and import it 8/21 .. do later with ALL of them --- // 
	app.get("/about", function (req, res) {
		res.render("about");
	});

//------Create-----//
	app.get("/create", function (req, res) {
		res.render("create");
	});

	app.post("/create", function (req, res) {
		console.log(req.body);
		const newCube = new CubeModel(req.body);
		newCube.save(function(err, newCube) {
			console.log("A new cube has been saved!!");
		});
		res.redirect(301, "/");

	});
	
// ---------- register ----- //
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


// ---- login --- //
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

//---- details ---- //
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

// ---- createAccessory --//
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

//----- attachAccessory -- //
	app.get("/details/attach/accessory/:id", function (req, res) {
		res.send(`<h1> No ATTACH ACCESSORY data yet, id is ${req.params.id} </h1>`);
	});

//---- 404 page -- //
	app.get("/*", (req, res) => {
        // This commented out code throws an error jwt /undefined.  did a const which didn't correct it. 8/22 
		//res.render("404", { jwt: req.cookies.jwt }); 
        res.render("404");
	});		
};

// This does what it is intended to do.  Some tweaks needed, but so far nodemon Gods are happy.  8/22--//