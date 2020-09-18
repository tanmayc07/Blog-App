const mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  noOfLikes: { type: Number, required: false, default: 0 },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

var blogTable = mongoose.model("blog", blogSchema);
module.exports = blogTable;
module.exports = {
  createBlog: function (inputData, callback) {
    userData = new blogTable(inputData);
    userData.save(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
  listAll: async function (callback) {
    data = await blogTable.find({});
    return callback(data);
  },
  listBlog: async function (callback) {
    data = await blogTable.findOne().hint({ $natural: -1 });
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
