

const express = require("express");
const { render } = require("../app");
const router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Recipe = require("../database/Recipes");


let recipes = {
    name: 'Pizza', 
    ingredients: [],
    instructions: []
}
router.use(bodyParser.json());

router.get("/",(req,res)=>{
    res.json(recipes)
    
})
router.get("/recipe",(req,res)=>{
    res.json(recipes)
    
})
router.get("/recipe/:food",(req,res)=>{
  
    recipes.name = req.params.food
    /* res.json(recipes[req.params.name]); */
    res.json(recipes)
    
    
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
 


module.exports = router