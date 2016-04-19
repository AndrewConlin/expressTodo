var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

/*Add a new todo item*/
router.post('/create', ctrlMain.create);

/*Delete an existing todo item*/
router.get('/delete/:id', ctrlMain.delete);

/*edit an existing todo item*/
router.get('/edit/:id', ctrlMain.edit);

/*update an existing todo item*/
router.post('/update/:id', ctrlMain.update);

module.exports = router;
