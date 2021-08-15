const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accessorySchema = new Schema ({
    id: Schema.Types.ObjectId,
    name: String,
    description: String,
    imageUrl: String,
    //Cubes: [{ type: Schema.Types.ObjectId, Cubes: Cubes }]

});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;