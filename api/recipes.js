let recipes = {
    name: 'test', 
    ingredients: ["Durum flour 4,5dl","eggs 3-4", "olive oil 2-3ts", "salt"],
    instructions: ["Measure flour", "add oil, eggs and salt", "stir", "boil in water"]
    
}
const express = require("express")
const { render } = require("../app")
const router = express.Router()


router.get("/",(req,res)=>{
    res.json(recipes)
    
})
router.get("/recipe/:food",(req,res)=>{
  
    recipes.name = req.params.food
    /* res.json(recipes[req.params.name]); */
    res.json(recipes.name)
    
    
  });



module.exports = router