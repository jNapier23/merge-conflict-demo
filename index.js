favFood = [
    "yaki udon",
    "baked beans on toast",
    "cheese cake",
    "Ramen",
    "pasta",
    "pizza"
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

setTimeout(function(){
    window.location.reload(1);
 }, 5000);

