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
    const inputData = req.body;
    const userid = req.userid;
    userModel.getOneUser(userid, function(username){
      inputData.author = username
      blogModel.createBlog(req, inputData, function (data) {
        userModel.updateBlog(req, data, function (data) {
          res.json(data);
        });
      });
    })
  },
  listMine: function (req, res) {
    const inputData = req.body;
    const userid = req.userid;    
    userModel.getOneUser(userid, function(author){
      inputData.author = author 
      blogModel.listMine(author,function (data) {
        res.render("myBlogs", { data });
      });
    })  
  },
  listAll: function (req, res) {
    blogModel.listAll(function (data) {
      res.render("explore", { data });
    });
  },
  listData: function (req, res) {
    const id = req.params.id
    blogModel.listBlog(id, function (data) {
      res.render("blog", { data });
    });
  },
  getUpdate: function(req, res){
    const id = req.params.id
    blogModel.listBlog(id, function(data){
      res.render("update", { data: JSON.stringify(data), blogid:req.params.id })
    }) 
  },
  updateData: function (req, res) {
    var inputData = req.body;
    var blogID = req.params.id;
    blogModel.updateBlog(inputData, blogID, function (data) {
      res.json(data);
    });
  },
  deleteData: function (req, res) {
    var blogID = req.params.id;
    blogModel.deleteBlog(blogID, function (data) {
      res.send(`Record deleted!`);
    });
  },
};
