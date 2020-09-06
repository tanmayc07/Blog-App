const mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: false },
  noOfLikes: { type: Number, required: false },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
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
  updateBlog: function (inputData, blogID, callback) {
    console.log(blogID);
    blogData = blogTable.findByIdAndUpdate(blogID, inputData);
    blogData.exec(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
  deleteBlog: function (blogID, callback) {
    console.log(blogID);
    blogData = blogTable.findByIdAndDelete(blogID);
    blogData.exec(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
};
