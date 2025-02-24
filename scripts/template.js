function getDishesTemplate(dish, category, index) {
    return `<div class="dish_content">
                <div class="dish_infos">
                    <h3>${dish[index].name}</h3>
                    <span>${dish[index].description}</span>
                    <p>${dish[index].price.toFixed(2).replace(".",",")}€</p>
                </div>
                <button onclick="addToBasket('${category}', ${[index]})">+</button>
            </div>`
}

function getBasketTemplate(index) {
    return `<div id=${"meal"+ index}>
                <h3>${basket[index].name}</h3>
                <div class="basket_content">
                    <button onclick="removeFromBasket(${index})">-</button>
                    <span>${basket[index].ammount}x</span>
                    <button onclick="addAgainToBasket(${index})">+</button>
                    <span>${basket[index].totalPrice.toFixed(2).replace(".",",")}€</span>
                    <img onclick="deleteFromBasket(${index})" class="trash_img" src="./assets/icon/mulleimer.png" alt="">
                </div>
            </div>`
}

function getCostsTemplate(sum, deliveryCosts, sumAndDelivery) {
    return `<span>Zwischensumme:${sum.toFixed(2).replace(".",",")}€</span>
            <span id="delivery">Lieferkosten:${deliveryCosts.toFixed(2).replace(".",",")}</span>
            <span>Gesamtsumme:${sumAndDelivery.toFixed(2).replace(".",",")}€</span>`
    
}



                
                