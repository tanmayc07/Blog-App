const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum 6 characters"],
  },
  gender: {
    type: String,
    required: false,
  },
  DOB: {
    type: Date,
    required: false,
  },
  blogs: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "blog",
    default: "5f674b7d2cac2a3f6c9e593e",
  },
});

//fire a function before doc saved to db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method to login user

// userSchema.statics.login = async function (email, password) {
//   const user = await this.findOne({ email });
//   if (user) {
//     const auth = await bcrypt.compare(password, user.password);
//     if (auth) {
//       return user;
//     }
//     throw Error("Incorrect Password");
//   }
//   throw Error("Incorrect Email");
// };

var User = mongoose.model("user", userSchema);

// module.exports = User;
module.exports = {
  updateBlog: async function (req, data, callback) {
    console.log(data._id);
    console.log(req.params.userid);
    await User.findByIdAndUpdate(
      { _id: req.params.userid },
      { $set: { firstname: "Sarthak" } },
      function (err, res) {
        if (err) {
          console.log(err);
        } else {
          return callback();
        }
      }
    );
  },
  createUser: function (data) {
    userData = new User(data);
    userData.save(function (err) {
      if (err) throw err;
      return data;
    });
    return userData;
  },
  login: async function (email, password) {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error("Incorrect Password");
    }
    throw Error("Incorrect Email");
  },
};
