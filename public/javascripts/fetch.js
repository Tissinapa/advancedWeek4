

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
    const recipeBody = document.getElementById("bodyId")
    const food = document.createElement("h1")
    const ingr = document.createElement("h2")
    const inst = document.createElement("h2")
    const ingrUl = document.createElement("ul")
    
    const instUl = document.createElement("ul")
    
    
    /* recipe.ingredients.forEach(getList) */
    
    ingr.innerHTML="ingredients"
    inst.innerHTML="instructions"
    food.innerHTML=recipe.name
    recipeBody.appendChild(food)
    recipeBody.appendChild(ingr)

    for(let i= 0; i < recipe.ingredients.length; i++){
        const ingrLI = document.createElement("li")
        ingrLI.innerText=recipe.ingredients[i]
        ingrUl.appendChild(ingrLI)
        
    }
    recipeBody.appendChild(ingrUl)
    recipeBody.appendChild(inst)

    for(let i= 0; i < recipe.instructions.length; i++){
        const instLI = document.createElement("li")
        instLI.innerText=recipe.instructions[i]
        instUl.appendChild(instLI)
    }
    recipeBody.appendChild(instUl)
}





