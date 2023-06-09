function holiday(arr) {
    let moneyNeeded = Number(arr[0]);
    let money = Number(arr[1]);

    let index = 2;
    let command = arr[index];
    index++;
    let sum = Number(arr[index]);
    index++;

    let days = 0;
    let daysSpendInARow = 0;

    while(moneyNeeded >= money) {
        days++;
        switch(command) {
            case("spend"):
                daysSpendInARow++;
                if(daysSpendInARow >= 5) {
                    console.log("You can't save the money.");
                    console.log(days);
                    return;
                }
                money -= sum;
                    if(money < 0) {
                        money = 0;
                    }
                break;
            case("save"):
                daysSpendInARow = 0;
                money += sum;
                if(money >= moneyNeeded) {
                    console.log(`You saved the money for ${days} days.`)
                    return;
                }
                break;
        }
        command = arr[index];
        index++;
        sum = Number(arr[index]);
        index++

        

    }

}
holiday(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])

