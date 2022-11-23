var express = require('express');
var router = express.Router();

let recipes = {
  name: "", 
  ingredients: ["Durum flour 4,5dl","eggs 3-4", "olive oil 2-3ts", "salt"],
  instructions: ["Measure flour", "add oil, eggs and salt", "stir", "boil in water"]
  
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/recipe", (req,res) =>{

  /* fetch("http://localhost:3000/r") */
  res.render('recipePage')

})
router.get('/recipe/:food', (req,res) => {
  res.send( req.params.food)
  
});

module.exports = router;
