function jorney(arr) {
    let budget = Number(arr[0]);
    let season = arr[1];
    let destination = "";
    let placeToStay = "";
    let moneySpent = 0

    if(budget <= 100) {
        destination = "Bulgaria";
    } else if(budget <= 1000) {
        destination = "Balkans";
    } else {
        destination = "Europe";
    }

    switch(destination) {
        case "Bulgaria":
            switch(season) {
                case "summer":
                    moneySpent = 0.3 * budget;
                    placeToStay = "Camp";
                    break;
                case "winter":
                    moneySpent = 0.7 * budget;
                    placeToStay = "Hotel"
                    break;
            }
        break;
        case "Balkans":
            switch(season) {
                case "summer":
                    moneySpent = 0.4 * budget;
                    placeToStay = "Camp";
                    break;
                case "winter":
                    moneySpent = 0.8 * budget;
                    placeToStay = "Hotel"
                    break;
            }
        break;
        case "Europe":     
                moneySpent = 0.9 * budget;
                placeToStay = "Hotel";
        break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${placeToStay} - ${moneySpent.toFixed(2)}`);

}
jorney(["312", "summer"]);