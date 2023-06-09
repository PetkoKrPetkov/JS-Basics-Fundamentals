function kino(arr) {
    let type = arr[0];
    let rows = Number(arr[1]);
    let collums = Number(arr[2]);
    let income = 0;

    switch(type) {
        case "Premiere":
            income = 12 * (rows * collums);
            break;
        case "Normal":
            income = 7.5 * (rows * collums);
            break;
        case "Discount":
            income = 5 * (rows * collums);
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}
kino(["Premiere",
"10",
"12"])
