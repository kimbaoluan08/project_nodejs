// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const Users = new Schema({
    name: String,
    password: String
});

module.exports = mongoose.model('Users', Users);