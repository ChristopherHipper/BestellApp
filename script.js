function init() {
    renderMainDishes ();
    renderSaladDishes ();
    renderDrinks ();
}

function renderMainDishes () {
    let mainDishesRef = document.getElementById('main_dish_content')
    for (let indexMain = 0; indexMain < mainDishes.length; indexMain++) {
        mainDishesRef.innerHTML += getMainDishesTemplate(indexMain);
    };
};

function renderSaladDishes () {
    let saladDishesRef = document.getElementById('salad_dish_content')
    for (let indexSalad = 0; indexSalad < salads.length; indexSalad++) {
        saladDishesRef.innerHTML += getSaladDishesTemplate(indexSalad);
    };
};

function renderDrinks () {
    let drinksRef = document.getElementById('drinks_dish_content')
    for (let indexDrinks = 0; indexDrinks < drinks.length; indexDrinks++) {
        drinksRef.innerHTML += getDrinksTemplate(indexDrinks);
    };
};
