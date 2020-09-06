const model = require("../config/database");
const blogModel = require("../models/blogapi/crud");

module.exports = {
  createForm: function (req, res) {
    res.render("blogPage");
  },
  createData: function (req, res) {
    var inputData = req.body;
    blogModel.createBlog(inputData, function (data) {
      res.send(`Record was created! ${data}`);
    });
  },
  listData: function (req, res) {
    blogModel.listBlog(function (data) {
      res.send(data);
    });
  },
  updateData: function (req, res) {
    var inputData = req.body;
    var blogID = req.body.blogid;
    blogModel.updateBlog(inputData, blogID, function (data) {
      res.send(`Record updated! ${data}`);
    });
  },
  deleteData: function (req, res) {
    var blogID = req.body.blogid;
    blogModel.deleteBlog(blogID, function (data) {
      res.send(`Record deleted!`);
    });
  },
};
