const totalAmount = document.getElementById("total-cost");
const totalAmountNumber = parseInt(totalAmount.innerText)
const finalCost = document.getElementById("total");
const finalCostTotal = parseInt(finalCost.innerText)

// update mac quantity cost
function updateCost(targetId, amount) {
    const quantityCost = document.getElementById(targetId);
    quantityCost.innerText = amount;
}

// convert to Number
function converToNumber(idName) {
    const priceText = document.getElementById(idName);
    const priceNumber = parseInt(priceText.innerText)
    return priceNumber;
}


// update total price
function updateTotal() {
    const memoryCost = converToNumber("memory")
    const storageCost = converToNumber("storage")
    const deliveryCost = converToNumber("delivery")
    const totalQuantity = memoryCost + storageCost + deliveryCost;
    totalAmount.innerText = totalAmountNumber + totalQuantity;

    // final cost
    finalCost.innerText = totalQuantity + finalCostTotal;
}


// memory
document.getElementById("memory8").addEventListener("click", function () {

    updateCost("memory", "0")
    updateTotal()
})
document.getElementById("memory16").addEventListener("click", function () {
    updateCost("memory", "180")
    updateTotal()
})

// storage
document.getElementById("storage256").addEventListener("click", function () {

    updateCost("storage", "0")
    updateTotal()
})
document.getElementById("storage512").addEventListener("click", function () {
    updateCost("storage", "100")
    updateTotal()
})
document.getElementById("storage1tb").addEventListener("click", function () {
    updateCost("storage", "180")
    updateTotal()
})

// delivery
document.getElementById("delivery1").addEventListener("click", function () {

    updateCost("delivery", "0")
    updateTotal()
})
document.getElementById("delivery2").addEventListener("click", function () {
    updateCost("delivery", "20")
    updateTotal()
})



// promo code
document.getElementById("promo-btn").addEventListener("click", function () {
    const inputField = document.getElementById("promo-code");

    const finalCost = document.getElementById("total");
    const finalCostTotal = parseInt(finalCost.innerText)

    if (inputField.value == "stevekaku") {
        const totalAfterPromo = finalCostTotal * 20 / 100;
        finalCost.innerText = finalCostTotal - totalAfterPromo;
    } else {
        alert("your promo code wrong")
    }
    inputField.value = ""
    inputField.disabled = true;
})
