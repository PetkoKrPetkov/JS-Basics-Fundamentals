function dayOfWeek(dayCount) {

    let validDay = dayCount > 0 && dayCount < 8;

    let daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        ]

    if(validDay) {
        currDay = daysOfWeek[dayCount - 1];
        console.log(currDay);
    } else {
        console.log("Invalid day!");
    }
}
dayOfWeek(8);