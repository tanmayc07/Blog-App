const model = require("../config/database");
const blogModel = require("../models/blogapi/crud");
const userModel = require("../models/user/User");

module.exports = {
  createForm: function (req, res) {
    let user = {
      id: req.userid
    }
    res.render("create", {user:user});
  },
  createData: function (req, res) {
    var inputData = req.body;
    blogModel.createBlog(req, inputData, function (data) {
      userModel.updateBlog(req, data, function () {
        res.send("Record created");
      });
    });
  },
  listAll: function (req, res) {
    blogModel.listAll(function (data) {
      res.render("explore", { data });
    });
  },
  listData: function (req, res) {
    blogModel.listBlog(function (data) {
      res.render("blog", { data });
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
