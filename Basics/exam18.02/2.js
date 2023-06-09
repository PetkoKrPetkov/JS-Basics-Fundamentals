function footballKit(arr) {
    let tShirtPrice = Number(arr[0]);
    let priceGoal = Number(arr[1]);

    let shortsPrice = 0.75 * tShirtPrice;
    let socksPrice = 0.20 * shortsPrice;
    let shoes = (tShirtPrice + shortsPrice) * 2;

    let totalPrice = (tShirtPrice + shortsPrice + socksPrice + shoes) * 0.85;

    if(totalPrice >= priceGoal) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    } else {
        let diff = priceGoal - totalPrice;
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }

}
footballKit(["55",
"310"])

