var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//set path to views folder
app.set('views', path.join(__dirname, 'app_server', 'views'));

//set handlebars as default templeting agent
var handlebars = require('express-handlebars').create({defaultLayout:'../../app_server/views/layouts/main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// app.use('/', routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./app_server/routes/index'));

//custom 404
app.use(function(req, res){
      res.status(404);
      res.render('404');
});

//custom 500
app.use(function(err, req, res, next){
      console.log(err.stack);
      res.status(500);
      res.render('500');
});

app.listen(3000, function(){
      console.log('Toto app started on http://localhost:' + 3000 + '; press ctrl-c to terminate.');
});
