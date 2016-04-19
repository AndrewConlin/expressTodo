var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

// var homepageController = function(req,res){
//   res.render('index', {title:'Express'});
// };

/* GET home page. */
router.get('/', ctrlMain.index);

/*Add a new todo item*/
router.post('/create', ctrlMain.create);

/*Delete an existing todo item*/
router.get('/delete/:id', ctrlMain.delete);

/*edit an existing todo item*/
router.post('/edit', ctrlMain.edit);

module.exports = router;
