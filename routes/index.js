var express = require('express');
const { response } = require('../app');
var router = express.Router();

let recipes = {
  name: '""', 
  ingredients: [],
  instructions: []
  
}
//"Durum flour 4,5dl","eggs 3-4", "olive oil 2-3ts", "salt"
// "Measure flour", "add oil, eggs and salt", "stir", "boil in water"
/* GET home page. */
router.get('/', function(req, res, next) {

  
  res.render('index.pug');

});

router.get("/recipe", (req,res) =>{

  res.render('index.pug')

})

router.get('/recipe/:food', (req,res) => {
  
  recipes.name = req.params.food
  //res.json(recipes[req.params.name]);
  res.send(recipes)
  
  
});

module.exports = router;
