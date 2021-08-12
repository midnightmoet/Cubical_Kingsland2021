const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
	name: String,
	diffLevel: Number,
	description: String,
	imageURL: String,
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube; //stays on the bottom