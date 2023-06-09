function backToThePast(arr) {
    let money = Number(arr[0]);
    let yearToStay = Number(arr[1]);
    let ivansYears = 18;
    
    for(let i = 1800; i <= yearToStay; i++) {
        
        if(i % 2 === 0) {
            money -= 12000;
        } else {
            money -= 12000 + 50 * ivansYears;
        }
        ivansYears++;
    }


    if(money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`)
    } else {
        money = Math.abs(money);
        console.log(`He will need ${money.toFixed(2)} dollars to survive.`)
    }

}
backToThePast(["100000.15","1808"]);