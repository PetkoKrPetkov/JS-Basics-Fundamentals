function reportSystem(arr) {
    let index = 0;
    let goal = Number(arr[index]);
    index++;
    let command = arr[index];
    index++;

    let cardSpend = 0;
    let cardCounter = 0;
    let cashSpend = 0;
    let cashCounter = 0;
    let spendedMoney = 0;
    let spendsCounter = 0;

    while(command !== "End") {
        let spend = Number(command);
        spendsCounter++;
        if(spendsCounter % 2 !== 0) {
            if(spend > 100) {
                console.log("Error in transaction!");
            } else {
            cashSpend += spend;
            cashCounter++;
            spendedMoney += spend;
            console.log("Product sold!");
            }
        } else {
            if(spend < 10) {
                console.log("Error in transaction!");
            } else {
            cardSpend += spend;
            cardCounter++;
            spendedMoney += spend;
            console.log("Product sold!");
            }
        }

        if(spendedMoney >= goal) {
            let avgCash = cashSpend / cardCounter;
            let avgCard = cardSpend / cardCounter
            console.log(`Average CS: ${avgCash.toFixed(2)}`);
            console.log(`Average CC: ${avgCard.toFixed(2)}`);
            return;   
        }  
        command = arr[index];
        index++;
    }

    if(command === "End") {
        console.log("Failed to collect required money for charity.");
    }

}
reportSystem(["500","120","8","63","256","78","317"]);