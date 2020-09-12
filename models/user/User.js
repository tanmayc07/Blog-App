const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const blogsSchema = new mongoose.Schema({
    blogId:{
        type: String,
        required: false
    }
});

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
    },
    username:{
        type: String,
        required: false
    },
    password: {
        type: String,
        required: [true,"Please enter a password"],
        minlength: [6,"Minimum 6 characters"]
    },
    gender:{
        type: String,
        required: false
    },
    DOB:{
        type: Date,
        required: false
    },
    Blogs:[blogsSchema]
});

//fire a function before doc saved to db
userSchema.pre("save",async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


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

module.exports = User;

