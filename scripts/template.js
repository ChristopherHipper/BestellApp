function getMainDishesTemplate(indexMain) {
    return `<div class="dish_content">
                <div class="dish_infos">
                    <h3>${mainDishes[indexMain].name}</h3>
                    <span>${mainDishes[indexMain].description}</span>
                    <p>${mainDishes[indexMain].price.toFixed(2).replace(".",",")}€</p>
                </div>
                <button>+</button>
            </div>`
}

function getSaladDishesTemplate(indexSalad) {
    return `<div class="dish_content">
                <div class="dish_infos">
                    <h3>${salads[indexSalad].name}</h3>
                    <span>${salads[indexSalad].description}</span>
                    <p>${salads[indexSalad].price.toFixed(2).replace(".",",")}€</p>
                </div>
                <button>+</button>
            </div>`
}

function getDrinksTemplate(indexDrinks) {
    return `<div class="dish_content">
                <div class="dish_infos">
                    <h3>${drinks[indexDrinks].name}</h3>
                    <span>${drinks[indexDrinks].description}</span>
                    <p>${drinks[indexDrinks].price.toFixed(2).replace(".",",")}€</p>
                </div>
                <button>+</button>
            </div>`
}
                
                