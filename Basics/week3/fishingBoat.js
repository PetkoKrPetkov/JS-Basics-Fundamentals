function fishingBoat(arr) {
    let budget = Number(arr[0]);
    let season = arr[1];
    let fishermanCount = Number(arr[2]);
    let price = 0;

    switch(season) {
        case "Spring":
            price = 3000;
            break;
        case "Autumn":
            price = 4200;
            break;
        case "Summer":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if(fishermanCount <= 6) {
        price *= 0.9;
    } else if(fishermanCount <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if(fishermanCount % 2 === 0) {
        switch(season) {
            case "Spring":
            case "Summer":
            case "Winter":
            price *= 0.95;
            break

        }
        
    }

    let moneyLeft = budget - price;
    let moneyNeeded = price - budget;

    if(budget >= price) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }

}
fishingBoat(["3000",
"Summer",
"11"])

// fishingBoat(["3600",
// "Autumn",
// "6"]);
