function foodDelivery(input) {
    let numbersOfChickenMenu = Number(input[0]);
    let numbersOfFishMenu = Number(input[1]);
    let numbersOfVegiMenu = Number(input[2]);
    let totalPriceMenus = numbersOfChickenMenu * 10.35 + numbersOfFishMenu * 12.40 + numbersOfVegiMenu * 8.15;
    let desertPrice = totalPriceMenus * 0.2;
    let total = totalPriceMenus + desertPrice + 2.5;
    console.log(total);

}

foodDelivery(["2 ",
"4 ",
"3 "]
)