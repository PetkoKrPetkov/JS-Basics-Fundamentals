function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let bearToy = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let totalNumberOfToys = puzzle + talkingDoll + bearToy + minion + truck;
    let totalCostOfToys = (puzzle * 2.6 + talkingDoll * 3 + bearToy * 4.1 + minion * 8.2 + truck * 2);
    if (totalNumberOfToys > 50) {
        totalCostOfToys = totalCostOfToys - totalCostOfToys * 0.25;
    }
    let rentOfShop = 0.1 * totalCostOfToys;
    let totalIncome = totalCostOfToys - rentOfShop;

    
    if (totalIncome >= vacationPrice) {
        let moneyLeft = totalIncome - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = vacationPrice - totalIncome
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }


}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])


