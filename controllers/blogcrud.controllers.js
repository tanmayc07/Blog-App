const model = require("../config/database");
const blogModel = require("../models/blogapi/crud");

module.exports = {
  createData: function (req, res) {
    var inputData = req.query;
    console.log(req.query);
    blogModel.createBlog(inputData, function (data) {
      res.send(`Record was created! ${data}`);
    });
  },
  listData: function (req, res) {
    blogModel.listBlog(function (data) {
      res.send(`Documents = ${data}`);
    });
  },
  updateData: function (req, res) {
    var inputData = req.query;
    var blogID = req.query.blogid;
    blogModel.updateBlog(inputData, blogID, function (data) {
      res.send(`Record updated! ${data}`);
    });
  },
  deleteData: function (req, res) {
    var blogID = req.query.blogid;
    blogModel.deleteBlog(blogID, function (data) {
      res.send(`${data.affectedRows} Record deleted!`);
    });
  },
};
