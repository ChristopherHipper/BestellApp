function getMainDishesTemplate(indexMain) {
    return `<div class="dish_content">
                <div class="dish_infos">
                    <h3>${mainDishes[indexMain].name}</h3>
                    <span>${mainDishes[indexMain].description}</span>
                    <p>${mainDishes[indexMain].price.toFixed(2).replace(".",",")}€</p>
                </div>
                <button onclick="addToMainBasket(${indexMain})">+</button>
            </div>`
}

function getMainDishBasketTemplate(indexMain) {
    return `<div id=${"main"+ indexMain}>
                <h3>${mainDishes[indexMain].name}</h3>
                <div class="basket_content">
                    <button>-</button>
                    <span>1x</span>
                    <button>+</button>
                    <span>${mainDishes[indexMain].price.toFixed(2).replace(".",",")}€</span>
                    <img onclick="removeFromMainBasket(${indexMain})" class="trash_img" src="./assets/icon/mulleimer.png" alt="">
                </div>
            </div>`
}

function getSaladDishesTemplate(indexSalad) {
    return `<div class="dish_content">
                <div class="dish_infos">
                    <h3>${salads[indexSalad].name}</h3>
                    <span>${salads[indexSalad].description}</span>
                    <p>${salads[indexSalad].price.toFixed(2).replace(".",",")}€</p>
                </div>
                <button onclick="addToSaladBasket(${indexSalad})">+</button>
            </div>`
}

function getSaladDishBasketTemplate(indexSalad) {
    return ` <div id=${"salad"+ indexSalad}>
                <h3>${salads[indexSalad].name}</h3>
                <div class="basket_content">
                    <button>-</button>
                    <span>1x</span>
                    <button>+</button>
                    <span>${salads[indexSalad].price.toFixed(2).replace(".",",")}€</span>
                    <img onclick="removeFromSaladBasket(${indexSalad})" class="trash_img" src="./assets/icon/mulleimer.png" alt="">
                </div>
            </div>`
}

function getDrinksTemplate(indexDrinks) {
    return `<div class="dish_content">
                <div class="dish_infos">
                    <h3>${drinks[indexDrinks].name}</h3>
                    <span>${drinks[indexDrinks].description}</span>
                    <p>${drinks[indexDrinks].price.toFixed(2).replace(".",",")}€</p>
                </div>
                <button onclick="addToDrinksBasket(${indexDrinks})">+</button>
            </div>`
}

function getDrinksBasketTemplate(indexDrinks) {
    return `<div id=${"drinks"+ indexDrinks} >  
                <h3>${drinks[indexDrinks].name}</h3>
                <div class="basket_content">
                    <button>-</button>
                    <span>1x</span>
                    <button>+</button>
                    <span>${drinks[indexDrinks].price.toFixed(2).replace(".",",")}€</span>
                    <img onclick="removeFromDrinksBasket(${indexDrinks})" class="trash_img" src="./assets/icon/mulleimer.png" alt="">
                </div>
            </div>`
}


                
                