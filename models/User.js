const mongoose = require("mongoose");
const { isEmail } = require("validator")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        //validate: [isEmail ,"Enter a valid email"]
    },
    password: {
        type: String,
        required: [true,"Please enter a password"]
    },
});

const User = mongoose.model("user",userSchema);

module.exports = User;
