module.exports.index = function(req, res){
  res.render('index', { title : 'Express Todo App' });
};

module.exports.todo = function(req, res){
  res.render('todos');
};

module.exports.create = function(req, res){
  var content = req.body.content;
  res.redirect('/');
};
