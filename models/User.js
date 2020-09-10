const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
<<<<<<< HEAD
=======
        //validate: [isEmail ,"Enter a valid email"]
>>>>>>> 3bbe05c66caeda391f12bbab2a9c89750ec103de
    },
    username:{
        type: String,
        required: false
    },
    password: {
        type: String,
<<<<<<< HEAD
        required: [true,"Please enter a password"],
        minlength: [6,"Minimum password length is 6"]
    }
});

=======
        required: [true,"Please enter a password"]
    },
    gender:{
        type: String,
        required: false
    },
    DOB:{
        type: Date,
        required: false
    }
});

//fire a function before doc saved to db
userSchema.pre("save",async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

>>>>>>> 3bbe05c66caeda391f12bbab2a9c89750ec103de

//static method to login user

userSchema.statics.login = async function(email,password) {
    const user = await this.findOne({ email }); 
    if (user) {
        const auth = await bcrypt.compare(password,user.password);
        if (auth){
            return user;
        }
        throw Error ("incorrect Password")
    }
    throw Error ("Incorrect Email")
}

const User = mongoose.model("user",userSchema);

<<<<<<< HEAD
module.exports = User;
=======
module.exports = User;
>>>>>>> 3bbe05c66caeda391f12bbab2a9c89750ec103de
