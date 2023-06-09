function yardGreening(input) {
    let yardSize = Number(input[0]);
    let priceWithoutDiscount = yardSize * 7.61;
    let discount = priceWithoutDiscount * 0.18;
    let finalPrice = priceWithoutDiscount - discount;
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)


}

yardGreening(["550"]);