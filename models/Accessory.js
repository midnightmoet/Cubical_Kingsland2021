// -- Deleted unnecessary code --- 8/22 -- //
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accessorySchema = Schema({
	name: String,
	description: String,
	imageUrl: String,
	cubes: [{ type: Schema.Types.ObjectId, ref: 'Cube'}] 
	//cubes: Number (didn't use this but its an option)
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;