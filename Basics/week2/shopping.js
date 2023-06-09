function shopping(input) {
    let budgetOfPeter = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let chipsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardsPrice = videoCardsCount * 250;
    let chipsPrice = (0.35 * videoCardsPrice) * chipsCount;
    let ramPrice = (0.1 * videoCardsPrice) * ramCount;
    let totalCosts = videoCardsPrice + chipsPrice + ramPrice;
    if(videoCardsCount > chipsCount) {
        totalCosts = 0.85 * totalCosts;
    }
    if (budgetOfPeter >= totalCosts) {
        let budgetLeft = budgetOfPeter - totalCosts;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`)
    } else {
        let budgetNeeded = totalCosts - budgetOfPeter;
        console.log(`Not enough money! You need ${budgetNeeded.toFixed(2)} leva more!`)
    }

}
shopping(["920.45",
"3",
"1",
"1"])

