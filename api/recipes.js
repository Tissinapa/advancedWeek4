let recipes = {
    name: 'Pizza', 
    ingredients: [],
    instructions: []
    
}
const express = require("express")
const { render } = require("../app")
const router = express.Router()


router.get("/",(req,res)=>{
    res.json(recipes)
    
})
router.get("/recipe",(req,res)=>{
    res.json(recipes)
    
})
router.get("/recipe/:food",(req,res)=>{
  
    recipes.name = req.params.food
    /* res.json(recipes[req.params.name]); */
    res.json(recipes.name)
    
    
});



module.exports = router