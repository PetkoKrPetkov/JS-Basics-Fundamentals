function worldSwimmingRecord(input) {
    let recordTime = Number(input[0]);
    let lenghtInM = Number(input[1]);
    let timeFor1M = Number(input[2]);

    let timeNeededFirst = lenghtInM * timeFor1M;
    let delayDuration = Math.floor(lenghtInM / 15);
    let delayTime = delayDuration * 12.5;
    let totalTimeNeeded = timeNeededFirst + delayTime;

    if (totalTimeNeeded < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTimeNeeded.toFixed(2)} seconds.`)
    } else {
        let timeDiff = totalTimeNeeded - recordTime
        console.log(`No, he failed! He was ${timeDiff.toFixed(2)} seconds slower.`) 
    }

}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

