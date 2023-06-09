function steps(arr) {
    let stepsNeeded = 10000;

    let index = 0;
    let command = arr[0];
    index++;

    while(command !== "Going home") {
        stepsNeeded -= Number(command);
        if(stepsNeeded <= 0) {
            console.log("Goal reached! Good job!");
            console.log(`${Math.abs(stepsNeeded)} steps over the goal!`)
            return;
        }
        command = arr[index];
        index++;
    }
    if(command === "Going home") {
        command = arr[index];
        // index++;
        stepsNeeded -= Number(arr[index]);
    }
    
    if(stepsNeeded <= 0) {
        console.log("Goal reached! Good job!");
        console.log(`${Math.abs(stepsNeeded)} steps over the goal!`)  
    } else {
        console.log(`${stepsNeeded} more steps to reach goal.`)
    }

}
steps(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])





