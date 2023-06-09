function toyShop2(input) {
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysPrice = puzzleCount * 2.6 + dollsCount * 3 + bearCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;
    let toysCount = puzzleCount + dollsCount + bearCount + minionsCount + trucksCount;

    if(toysCount >= 50) {
        toysPrice = toysPrice * 0.75;
    }

    let moneyWon = toysPrice
    moneyWon = 0.9 * moneyWon;

    if(moneyWon >= holidayPrice) {
        let moneyLeft = moneyWon - holidayPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = holidayPrice - moneyWon;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}
toyShop2(["40.8",
"20",
"25",
"30",
"50",
"10"])
