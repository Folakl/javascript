// the Initial Refrences
let result = document.getElementById("result")
let searchBtn = document.getElementById("search-btn")
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="



function handleClick() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.length == 0) {
        result.innerHTML = `<p class=" text-center mt-[1.8em] text-[#202030]"> Input field cannot be empty`
    }
    else {
        fetch(url + userInput)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                let myMeal = data.meals[0];
                let count = 1
                let ingredients = [];
                for (let i in myMeal) {
                    let ingredient = ""
                    let measure = ""
                    if (i.startsWith("strIngredient") && myMeal[i]) {
                        ingredient = myMeal[i]
                        measure = myMeal[`strMeasure` + count];
                        count += 1
                        ingredients.push(`${measure} ${ingredient}`)
                    }
                }
                console.log(ingredients);

                result.innerHTML = `<img class="block w-[50%] m-[1.8em] mx-auto mt-5" src=${myMeal.strMealThumb}>
        <div class="details bg-[#007ACC] relative mt-[-4.3em] mb-0 mr-0 ml-0 text-center py-[0.6em] px-0">
            <h2 class="font-bold">${myMeal.strMeal}</h2>
            <h2 class="">${myMeal.strArea}</h2>
        </div>
        <div id="ingredient-con"></div>
        <div id="recipe" class="absolute hidden bg-white min-h-[100%] w-[100%] top-0 left-0 z-20 rounded-[0.6em]">
            <button onclick="hideRecipe()" id="hide-recipe" class="font-[1em] relative w-[1.8em] h-[1.8em] bg-[#007ACC] border-none top-[1.2em] left-[90%] rounded-md"> X </button>
            <p class="instructions overflow-wrap-break-word whitespace-pre-wrap whitespace-no-wrap px-[1.2em] py-[2.5em] ">${myMeal.strInstructions}</p>
        </div>
        <button onclick="showRecipe()" id="show-recipe" class="font-[1em] relative left-[75%] py-[0.9em] px-[0.6em] bg-[#007ACC] border-none top-[1.5em] rounded-md">View Recipe</button>
        `;

                let ingredientcon = document.getElementById("ingredient-con")
                let parent = document.createElement("ul")
                parent.classList.add("font-[1em]", "relative", "grid", "grid-cols-2", "gap-y-[0.8em]", "gap-x-[1.1em]");
                let recipe = document.getElementById("recipe")
                let hideRecipe = document.getElementById("hide-recipe")
                let showRecipe = document.getElementById("show-recipe")


                ingredients.forEach((i) => {
                    let child = document.createElement("li")
                    child.innerText = i
                    parent.appendChild(child)
                    ingredientcon.appendChild(parent)
                })


                hideRecipe.addEventListener("click", () => {
                    recipe.style.display = "none"
                })
                showRecipe.addEventListener("click", () => {
                    recipe.style.display = "block"
                })


            }).catch(() => {
                result.innerHTML = `<p>Invalid Input</p>`
            })


    }
}
