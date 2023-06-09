function excursion(arr) {
    let peopleCount = Number(arr[0]);
    let nightsCount = Number(arr[1]);
    let cardsCount = Number(arr[2]);
    let ticketsCount = Number(arr[3]);

    let priceHotel = nightsCount * 20;
    let priceTransport = cardsCount * 1.60;
    let priceMuseum = ticketsCount * 6;

    let priceForPerson = priceHotel + priceTransport + priceMuseum;
    let totalPriceAll = priceForPerson * peopleCount;
    totalPriceAll *= 1.25;

    console.log(totalPriceAll.toFixed(2));

}
excursion(["20",
"14",
"30",
"6"])
