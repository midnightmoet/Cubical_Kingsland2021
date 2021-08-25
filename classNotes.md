//Notes from Ron 8/18/2021

To check a password:

// Load hash from your password DB.
bcrypt.compare("B4c0/\/", hash, function(err, res) {
    // res === true
});
bcrypt.compare("not_bacon", hash, function(err, res) {
    // res === false
});
 
// As of bcryptjs 2.4.0, compare returns a promise if callback is omitted:
bcrypt.compare("B4c0/\/", hash).then((res) => {
    // res === true
});

-------------------------------------------------------------

var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"

-------------------------------------------------------------

new User({password:hash, email, username});

--------------------------------------------------------------

Jonathan Kings User.js model

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: "String", required: true },
    password: { type: "String", required: true }, 
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

--------------------------------------------------------------

Routes: check, register a user: check, user stored in Mongo DB: check, generating hashes with bcrypt: no idea.

--------------------------------------------------------------

https://www.npmjs.com/package/bcryptjs

--------------------------------------------------------------

var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});


--------------------------------------------------------------

userSchema.methods.generateAuthToken = async function() {...

-------------------------------------------------------------

bcrypt.hash(password, 12).then(hash => {…


--------------------------------------------------------------

bcrypt.hash(password, saltRounds, function(err, hash) {
  // Store hash in database here
});

---------------------------------------------------------------

<!-- Class notes 8/23 -->
{{#if errors}}
     <div id="notifications">
     
<div class="alert alert-warning" role="alert">
{{errors}}
</div>
  </div>
    {{/if}}
