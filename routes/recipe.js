var express = require('express');
var router = express.Router();

let recipes = {
    name: "",
    instructions: [],
    ingredients: []

}


router.get('/recipe/:food', (req,res) => {
    res.send(req.params.food)
    
});

module.exports = router;