function petShop(input) {
    let numberOfDogFood = Number(input[0]);
    let numberOfCatFood = Number(input[1]);
    let moneyNeededDogFood = 2.5 * numberOfDogFood;
    let moneyNeededCatFood = 4 * numberOfCatFood;
    let totalMoney = moneyNeededCatFood + moneyNeededDogFood;
    console.log(`${totalMoney} lv.`)

}

petShop(["5","4"]);