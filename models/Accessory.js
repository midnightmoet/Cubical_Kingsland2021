// No changes made 8/21
const mongoose = require("mongoose");
//const Cube = require('./Cube');
const Schema = mongoose.Schema;

const accessorySchema = Schema({
	name: String,
	description: String,
	imageUrl: String,
	difficultyLevel: Number, //String? May not need it
	cubes: [{ type: Schema.Types.ObjectId, ref: 'Cube'}] 
	//cubes: Number (didn't use this but its an option)
});

const Accessory = mongoose.model("Accessory", accessorySchema);
//console.log(Accessory);

module.exports = Accessory;