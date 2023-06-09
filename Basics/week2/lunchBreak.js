function lunchBreak(input) {
    let nameOfSerial = input[0];
    let durationOfTheSerial = Number(input[1]);
    let durationOfTheBreak = Number(input[2]);

    let timeLeft = durationOfTheBreak - (1 / 4 * durationOfTheBreak + 1 / 8 * durationOfTheBreak);

    if (timeLeft >= durationOfTheSerial) {
        let moreTimeLeft = timeLeft - durationOfTheSerial;
        console.log(`You have enough time to watch ${nameOfSerial} and left with ${Math.ceil(moreTimeLeft)} minutes free time.`);
    } else {
        let moreTimeNeeded = durationOfTheSerial - timeLeft;
        console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${Math.ceil(moreTimeNeeded)} more minutes.`)
    }

}
lunchBreak(["Teen Wolf",
"48",
"60"])

