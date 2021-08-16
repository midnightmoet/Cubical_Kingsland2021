const { Schema, model } = require('mongoose');

const schema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true, maxLength: 500 },
	imageURL: { type: String, required: true, match: /^https?:\/\// },
	difficultyLevel: { type: Number, min: 1, max: 6 },
	//Uncommented this threw a Schema undefined
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment '}],
	accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory' }]
});

module.exports = model('Cube', schema);