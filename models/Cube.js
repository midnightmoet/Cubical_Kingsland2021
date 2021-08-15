const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
	name: String,
	diffLevel: Number,
	description: String,
	imageURL: String,
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube; //stays on the bottom

//----- just reference code for now
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// //const Accessory = require('./accessory);

// const cubeSchema = new Schema ({
//     id: Number, //Schema.Types.ObjectId
//     name: String,
//     description: String,
//     imageUrl: String,
//     difficultyLevel: Number,
//     //accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory }]
// });

// const Cube = mongoose.model('Cube', cubeSchema);

// module.exports = Cube;