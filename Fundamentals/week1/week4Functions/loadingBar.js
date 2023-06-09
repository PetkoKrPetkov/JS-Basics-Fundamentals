function loadingBar(num) {

    let percentageSymbolCount = num / 10;
    let pointsCounter = 10 - percentageSymbolCount;
    let percentSym = "%"
    let point = "."

    if(num === 100) {
        console.log("100% Complete!");
        console.log(`[${percentSym.repeat(percentageSymbolCount)}${point.repeat(pointsCounter)}]`);
    } else if(num >= 0 && num < 100) {
        console.log(`${num}% [${percentSym.repeat(percentageSymbolCount)}${point.repeat(pointsCounter)}]`);
        console.log("Still loading...");
    }
}
loadingBar(100);