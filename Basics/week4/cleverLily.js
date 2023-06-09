function cleverLily(arr) {
    let lilysYears = Number(arr[0]);
    let washmachinePrice = Number(arr[1]);
    let toyPrice = Number(arr[2]);
    let birthdayMoney = 0;
    let evenBDMoney = 10;

    for(let i = 1; i <=lilysYears; i++) {
        if(i % 2 ===0) {
            birthdayMoney += evenBDMoney;
            birthdayMoney -= 1;
            evenBDMoney += 10;
        } else {
            birthdayMoney += toyPrice;
        }
    }
    let moneyLeft = birthdayMoney - washmachinePrice;
    let moneyDiff = washmachinePrice - birthdayMoney;
    
    if(birthdayMoney>=washmachinePrice) {
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        console.log(`No! ${moneyDiff.toFixed(2)}`);
    }
    

}
cleverLily(["10",
"170.00",
"6"])
