let deliveryCosts = 5;

function init() {
    renderDishes ()
};


function renderDishes () {
    let mainDishesRef = document.getElementById('main_dish_content')
    for (let x = 0; x < allDishes.mainDishes.length; x++) {
        mainDishesRef.innerHTML += getDishesTemplate(allDishes.mainDishes, 'mainDishes', x);
    };
    let saladDishesRef = document.getElementById('salad_dish_content')
    for (let y = 0; y < allDishes.salads.length; y++) {
        saladDishesRef.innerHTML += getDishesTemplate(allDishes.salads,'salads', y);
    };
    let drinksRef = document.getElementById('drinks_dish_content')
    for (let z = 0; z < allDishes.drinks.length; z++) {
        drinksRef.innerHTML += getDishesTemplate(allDishes.drinks,'drinks', z);
    };
};

function addToBasket(category, index) {
    allDishes[category][index].totalPrice = allDishes[category][index].price;
    let check = allDishes[category][index].name;
    function isIncluded(dish) {
        return dish.name === check;
      }
      if (basket.find(isIncluded) == undefined) {
        basket.push(allDishes[category][index]);
        allDishes[category][index].ammount ++;
      }else {
        allDishes[category][index].ammount ++;
         allDishes[category][index].totalPrice = allDishes[category][index].price * allDishes[category][index].ammount;     
      }
        updateBasket()
};

function updateBasket() {
    document.getElementById('empty_basket').classList.add('display_none');
    document.getElementById('costs').classList.remove('display_none');
    let basketRef = document.getElementById('basket')
    basketRef.innerHTML = '';
    for (let index = 0; index < basket.length; index++) {
        basketRef.innerHTML += getBasketTemplate(index)
    };
    allCosts()
};

function showPlaceholder() {
    document.getElementById('basket')
    if (basket.length == 0) {
        document.getElementById('empty_basket').classList.remove('display_none');
        document.getElementById('costs').classList.add('display_none');
    }else
        return;
};

function deleteFromBasket(index) {
    basket[index].ammount = 0;
    let deleteMainRef = document.getElementById("meal" + index);
    deleteMainRef = basket.splice(index, 1)
    updateBasket();
    showPlaceholder()
};

function removeFromBasket(index) {
    basket[index].totalPrice -= basket[index].price;
    basket[index].ammount -= 1;
    if (basket[index].ammount < 1) {
        basket[index].ammount = 0;
        basket[index].totalPrice = basket[index].price;
        basket.splice(index, 1)
    }
    updateBasket()
    showPlaceholder()
};

function addAgainToBasket(index) {
    basket[index].ammount ++;
    basket[index].totalPrice += basket[index].price;
    updateBasket();
}


function allCosts() {

    let sumAndDelivery = 0;
    let sum = 0;
    let costsRef = document.getElementById('costs')
    for (let indexCosts = 0; indexCosts < basket.length; indexCosts++) {
        sum = sum + basket[indexCosts].totalPrice
        sumAndDelivery = sum + deliveryCosts;
        costsRef.innerHTML = getCostsTemplate(sum, deliveryCosts, sumAndDelivery)
    };
    
}

function addDelivery() {
    document.getElementById('delivery').classList.remove('display_none'); 
    deliveryCosts = 5;
    allCosts();
}

function removeDelivery() {
    document.getElementById('delivery').classList.add('display_none');
    deliveryCosts = 0;
    allCosts();
}




























