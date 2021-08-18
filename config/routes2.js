const CubeModels = require('../models/cubeModels');

module.exports = (app) => {
	// TODO..
	app.get("/", async function (req, res) {
		await CubeModels.find(function (err, cubes){
			if (err) return console.error(err);
			console.log(cubes);
		res.render("index", {cubes});
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
		//res.send("Form submitted");
		res.redirect(301, "/");

	});

	app.get("/details", function (req, res) {
		res.render("details");
	});

	app.get("/details/:id", function (req, res) {
		// res.render('details/:id')
		res.send(`<h1> No data yet, id is ${req.params.id} </h1>`);
	});

	app.get("/create/accessory", function (req, res) {
		res.send(`<h1> No data yet, id is ${req.params.id} </h1>`);
	});

	app.get("/attach/accessory/:id", function (req, res) {
		res.send(`<h1> No data yet, id is ${req.params.id} </h1>`);
	});


	app.get("/*", function (req, res) {
		res.render("404");
	});
};