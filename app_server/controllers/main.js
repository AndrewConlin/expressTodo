var mysql = require('../models/mysql.js');

module.exports.index = function(req, res){
  // var list = [];
  mysql.getConnection(function(err, con){
    list = con.query('Select * from todos', function(err, rows){
        if(err) throw err;
        res.render('index', { title : 'Express Todo App', todos: rows });
    });
  });
  // res.render('index', { title : 'Express Todo App' });
};

module.exports.create = function(req, res){
  var content = req.body.content;
  mysql.getConnection(function(err, con){
    con.query('INSERT INTO todos (content) VALUES ("' + content + '")');
  });
  res.redirect('/');
};

module.exports.delete = function(req, res){
  //delete code from by id
  res.redirect('/');
};

module.exports.edit = function(req, res){
  res.redirect('/');
};
