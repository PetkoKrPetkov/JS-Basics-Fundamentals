function suppliesForSchool(input) {
    let numberOfPens = Number(input[0]);
    let numberOfMarkers = Number(input[1]);
    let litersOfCleaning = Number(input[2]);
    let percentOfDiscount = Number(input[3]);
    let totalPrice = (numberOfPens * 5.8 + numberOfMarkers * 7.20 + litersOfCleaning * 1.2) - (numberOfPens * 5.8 + numberOfMarkers * 7.20 + litersOfCleaning * 1.2) * 0.25;
    console.log(totalPrice);

}

suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)