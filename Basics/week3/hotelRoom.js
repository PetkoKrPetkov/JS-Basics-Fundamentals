function hotelRoom(arr) {
    let month = arr[0];
    let nightsCount = Number(arr[1]);

    let priceStudio = 0;
    let priceAppartment = 0;

    switch(month) {
        case "May":
        case "October":
            priceStudio = 50 * nightsCount;
            if(nightsCount > 7 && nightsCount <=14) {
                priceStudio *= 0.95;
            } else if(nightsCount > 14) {
                priceStudio *= 0.7;
            }
            priceAppartment = 65 * nightsCount;
            break;
        case "June":
        case "September":
            priceStudio = 75.20 * nightsCount;
            if(nightsCount > 14) {
                priceStudio *= 0.80;
            }
            priceAppartment = 68.70 * nightsCount;
            break;
        case "July":
        case "August":
            priceStudio = 76 * nightsCount;
            priceAppartment = 77 * nightsCount;
            break;
    }

    if(nightsCount > 14 ) {
        priceAppartment *=0.9;
    }


    console.log(`Apartment: ${priceAppartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}
hotelRoom(["May",
"15"])
