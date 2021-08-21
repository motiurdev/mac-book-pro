function updateCost(targetId, amount) {
    const memoryCost = document.getElementById(targetId);
    memoryCost.innerText = amount;
}


const totalAmount = document.getElementById("total-cost");
const totalAmountNumber = parseInt(totalAmount.innerText)
const finalCost = document.getElementById("total");
const finalCostTotal = parseInt(finalCost.innerText)

function updateTotal() {
    const memory = document.getElementById("memory");
    const memoryCost = parseInt(memory.innerText)
    const storage = document.getElementById("storage")
    const storageCost = parseInt(storage.innerText)
    const delivery = document.getElementById("delivery")
    const deliveryCost = parseInt(delivery.innerText)
    const totalQuantity = memoryCost + storageCost + deliveryCost;
    totalAmount.innerText = totalAmountNumber + totalQuantity;

    // final cost
    finalCost.innerText = totalQuantity + finalCostTotal;
}

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
})




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