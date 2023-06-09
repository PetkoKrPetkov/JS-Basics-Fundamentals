function finalCompetition(arr) {
    let dancersCount = Number(arr[0]);
    let points = Number(arr[1]);
    let season = arr[2];
    let place = arr[3];

    let moneyWon = 0;

    switch(place) {
        case "Bulgaria":
            moneyWon = points * dancersCount;
            if( season === "summer") {
                moneyWon *= 0.95;
            } else if ( season === "winter") {
                moneyWon *= 0.92;
            }
            break;
        case "Abroad":
            moneyWon = dancersCount * points;
            moneyWon *= 1.5;
            if( season === "summer") {
                moneyWon *= 0.9;
            } else if( season === "winter") {
                moneyWon *= 0.85;
            }
            break;
    }

    let charity = 0.75 * moneyWon;
    let restMoney = moneyWon - charity;
    let moneyPerDancer = restMoney / dancersCount;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);


}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])

