function newHouse(arr) {
    let flowerType = arr[0];
    let flowerCount = Number(arr[1]);
    let budget = Number(arr[2]);
    let price = 0;

    switch(flowerType) {
        case "Roses":
            price = flowerCount * 5;
            break;
        case "Dahlias":
            price = flowerCount * 3.8;
            break;
        case "Tulips":
            price = flowerCount * 2.8;
            break;
        case "Narcissus":
            price = flowerCount * 3;
            break;
        case "Gladiolus":
            price = flowerCount * 2.5;
            break;
    }

    if(flowerType === "Roses" && flowerCount > 80) {
        price *= 0.90;
    } else if(flowerType === "Dahlias" && flowerCount > 90) {
        price *= 0.85;
    } else if(flowerType === "Tulips" && flowerCount > 80) {
        price *= 0.85;
    } else if(flowerType === "Narcissus" && flowerCount < 120) {
        price *= 1.15;
    } else if(flowerType === "Gladiolus" && flowerCount < 80) {
        price *= 1.20;
    }
    
    let moneyLeft = budget - price;
    let moneyNeeded = price - budget;

    if(budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
}
newHouse(["Tulips",
"88",
"260"])

