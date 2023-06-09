function computerFirm(arr) {
    let computersCount = Number(arr[0]);
    let index = 1;

    let sellsCount = 0;
    let ratingsCount = 0;

    for(let i = 1; i <= computersCount; i++) {
        let model = arr[index];
        let rating = Number(model[2]);
        let possibleSells = Number(model[0] + model[1]);
        ratingsCount += rating;
        index++;

        if(rating === 2) {
            sellsCount += 0 * possibleSells;
        } else if(rating === 3) {
            sellsCount += 0.5 * possibleSells;
        } else if(rating === 4) {
            sellsCount += 0.7 * possibleSells;
        } else if(rating === 5) {
            sellsCount += 0.85 * possibleSells;
        } else if(rating === 6) {
            sellsCount += possibleSells;
        }
    }

    let avgRating = ratingsCount / computersCount;

    console.log(sellsCount.toFixed(2));
    console.log(avgRating.toFixed(2));

}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])

