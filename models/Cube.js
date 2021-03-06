//  --- No changes made as of 8/22
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cubeSchema = Schema({
	name: String,
	description: String,
	imageUrl: String,
	difficultyLevel: Number,
	// accessories: [{ type: Schema.Types.ObjectId, ref: "Accessory" }],
	// creatorId: { type: Schema.Types.ObjectId },
	// creatorId: { type: String },
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;
