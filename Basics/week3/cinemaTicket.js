function cinemaTicket(arr) {
    let day = arr[0];
    let price = 0;

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = 12;
            break;
        case "Wednesday":
        case "Thursday":
            price = 14;
            break;
        default:
            price = 16;
            break;

    }
    console.log(price);
}
cinemaTicket(["Sunday"]);