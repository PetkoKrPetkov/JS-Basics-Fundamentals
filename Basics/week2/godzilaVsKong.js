function godzilaVsKong(input) {
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let statistClothesPrice = Number(input[2]);
    let decor = 0.1 * budget;
    let clothesPrice = statistCount * statistClothesPrice;
    if (statistCount > 150) {
        clothesPrice = 0.9 * clothesPrice;
    }

    let totalCosts = clothesPrice + decor;

    if (totalCosts > budget) {
        let moneyNeeded = totalCosts - budget;
        console.log('Not enough money!')
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    } else {
        let moneyLeft = budget - totalCosts;
        console.log('Action!')
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }

}
godzilaVsKong(["20000",
"120",
"55.5"])
