favFood = [

    "Food",
    "Food",
    "MoreFood",
    "yaki udon",
    "baked beans on toast",
    "cheese cake",
    "Ramen",
    "pepperoni pizza",
    "fries",
    "pasta",
    "margherita pizza"
]

favDrink = [
    "PORN STAR MARTINI",
    "ESPRESSO MARTINI",
    "FRENCH 75",
    "SALTED CARAMEL OLD FASHIONED",
    "LONG ISLAND ICED TEA",
    "MOJITO",
    "Bacardi Carta Blanca rum",
    "AMARETTO SOUR",
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

