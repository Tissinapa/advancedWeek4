var express = require('express');
const { response } = require('../app');
var router = express.Router();
const mongoose = require("mongoose");
const Recipe = require("../database/Recipes");
const bodyParser = require("body-parser");

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

router.post("/recipe/", (req, res, next)=>{
    
  Recipe.findOne({name: req.body.name}, (error, name)=> {

      if(error) return next(error);
      if(!name){
          new Recipe({
              name: req.body.name,
              ingredients: req.body.ingredients,
              instructions: req.body.instructions
          }).save((error) => {
              if(error) return next(error)
              return res.send(req.body)
          });


      } else {
          return res.status(403).send("Alredy has that recipe");
      }
  });

  //recipes.push(req.body)
  /* console.log("testing" + JSON.stringify(req.body) + "testing here") */
  //res.send(req.body)


})

module.exports = router;
