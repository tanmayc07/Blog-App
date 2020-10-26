const mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {type: String, required:true, ref:"user"},
  noOfLikes: { type: Number, required: false, default: 0 },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

var blogTable = mongoose.model("blog", blogSchema);

module.exports = {
  createBlog: function (req, inputData, callback) {
    userData = new blogTable(inputData);
    userData.save().then((data) => {callback(data)}).catch((err) => {console.log(err)});
  },
  listMine: async function (author,callback) {
    data = await blogTable.find({author:author});
    return callback(data);
  },
  listAll: async function (callback) {
    data = await blogTable.find({});  
    return callback(data);
  },
  listBlog: async function (id, callback) {
    data = await blogTable.findOne({ _id: id });
    return callback(data);
  },
  updateBlog: function (inputData, blogID, callback) {
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
