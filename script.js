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

function removeFromMainBasket(indexMain) {
    let removeMainRef = document.getElementById("main" + indexMain);
    removeMainRef.remove();
    showPlaceholder()
}

function addToMainBasket(indexMain) {
    if (basket[indexMain]) {
        basket[indexMain].ammount += 1;
        basket[indexMain].totalPrice += mainDishes[indexMain].price;
    } else {
        basket[indexMain] = {
            name: mainDishes[indexMain].name,
            ammount: 1,
            totalPrice: mainDishes[indexMain].price
        };      
    }
    updateMainBasket(indexMain)
}

function updateMainBasket(indexMain) {
    document.getElementById('empty_basket').classList.add('display_none');
    let basketRef = document.getElementById('basket')
    basketRef.innerHTML = '';
    for (let indexMain = 0; indexMain < basket.length; indexMain++) {
        basketRef.innerHTML += getMainDishBasketTemplate(indexMain)
    };
}










function showPlaceholder() {
    let placeholderRef = document.getElementById('basket')
    if (placeholderRef != null && placeholderRef.innerHTML.trim() === '') {
        document.getElementById('empty_basket').classList.remove('display_none');
    }else
        return;
}
























function renderSaladDishes () {
    let saladDishesRef = document.getElementById('salad_dish_content')
    for (let indexSalad = 0; indexSalad < salads.length; indexSalad++) {
        saladDishesRef.innerHTML += getSaladDishesTemplate(indexSalad);
    };
};

function addToSaladBasket(indexSalad) {
    document.getElementById('empty_basket').classList.add('display_none');
    let basketRef = document.getElementById('basket')
    basketRef.innerHTML += getSaladDishBasketTemplate(indexSalad);
}

function renderDrinks () {
    let drinksRef = document.getElementById('drinks_dish_content')
    for (let indexDrinks = 0; indexDrinks < drinks.length; indexDrinks++) {
        drinksRef.innerHTML += getDrinksTemplate(indexDrinks);
    };
};

function addToDrinksBasket(indexDrinks) {
    document.getElementById('empty_basket').classList.add('display_none');
    let basketRef = document.getElementById('basket')
    basketRef.innerHTML += getDrinksBasketTemplate(indexDrinks);
}



function removeFromSaladBasket(indexSalad) {
    let removeMainRef = document.getElementById("salad" + indexSalad);
    removeMainRef.remove();
    showPlaceholder()
}

function removeFromDrinksBasket(indexDrinks) {
    let removeMainRef = document.getElementById("drinks" + indexDrinks);
    removeMainRef.remove();
    showPlaceholder()
}







