const mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
});

var blogTable = mongoose.model("blog", blogSchema);

module.exports = {
  createBlog: function (inputData, callback) {
    userData = new blogTable(inputData);
    userData.save(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
  listBlog: async function (callback) {
    data = await blogTable.find();
    return callback(data);
  },
};
