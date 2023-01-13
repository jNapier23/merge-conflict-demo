favFood = [
    "yaki udon",
    "baked beans on toast",
    "cheese cake",
    "fried chicken",
    "chorizo",
    "sushi",
    "hojicha tea",
    "spinach pie",
    "fish and chips",
    "century eggs",
    "lasagna",
    "pizza",
    "chips",
    "cookies",
    "gruel",
    "lasagna"
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

setTimeout(function(){
    window.location.reload(1);
 }, 4000);

