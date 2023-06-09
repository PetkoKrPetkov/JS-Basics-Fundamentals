function speedClimbing(input) {
    let recordInSecs = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecsFor1Meter = Number(input[2]);

    let timeNeeded = distanceInMeters * timeInSecsFor1Meter + Math.floor(distanceInMeters / 50) * 30;
    let timeMore = timeNeeded - recordInSecs;

    if(timeNeeded < recordInSecs) {
        console.log(`Yes! The new record is ${timeNeeded.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${timeMore.toFixed(2)} seconds slower.`);
    }


}
speedClimbing([5554.36,
    1340,
    3.23
    ])