function fruitOrVegetable(arr) {
    let input = arr[0];
    let inputPrint ;

    switch(input) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
           inputPrint = "fruit";
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            inputPrint = "vegetable";
            break;
        default:
            inputPrint = "unknown";
            break;
    }
console.log(inputPrint);

}
fruitOrVegetable(["banana"]);