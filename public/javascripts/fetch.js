

if(document.readyState !== "loading"){
    console.log("Document is ready");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document ready after waiting!");
        initializeCode();
    })
}

function initializeCode(){
    try{
        fetch("http://localhost:3000/api/recipes.js")
            .then((res )=> res.json())
            .then((recipe) => {
                console.log(recipe)
                showRecipe(recipe)
            })
    } catch(error){
        error;
    }
}

function showRecipe(recipe) {
    const food = document.createElement("h1")
    food.innerHTML=recipe.name

    
    console.log(recipe.name)
    console.log(recipe.ingredients)
    console.log(recipe.instructions)

}