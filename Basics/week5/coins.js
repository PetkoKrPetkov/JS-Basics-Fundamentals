function coins(arr) {
    let money = Number(arr[0]);
    let cents = Math.round(money * 100);

    let coinsCounter = 0;

    while(cents > 0) {
        if(cents >= 200) {
            cents -= 200;
            coinsCounter++;
        } else if(cents >= 100) {
            cents -= 100;
            coinsCounter++;
        } else if(cents >= 50) {
            cents -=50;
            coinsCounter++;
        } else if(cents >= 20) {
            cents -=20;
            coinsCounter++;
        } else if(cents >= 10) {
            cents -= 10;
            coinsCounter++;
        } else if(cents >= 5) {
            cents -= 5;
            coinsCounter++;
        } else if(cents >= 2) {
            cents -= 2;
            coinsCounter++;
        } else if(cents >= 1) {
            cents -= 1;
            coinsCounter++;
        }
    }

    console.log(`${coinsCounter}`);


}
coins(["0.56"]);