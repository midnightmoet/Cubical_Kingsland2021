const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: "String", required: true },
	password: { type: "String", required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// Correct Schema, using userSchema because it makes sense to remind me of where it came from.