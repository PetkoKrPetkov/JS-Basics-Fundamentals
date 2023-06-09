function Time15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes;
    let futureTimeInMinutes = totalMinutes + 15;
    let futureTotalHours = Math.floor(futureTimeInMinutes / 60);
    let leftMinutes = futureTimeInMinutes - futureTotalHours * 60;

    if (futureTotalHours === 24) {
        futureTotalHours = 0;
    }
    
    if (leftMinutes < 10) {
        console.log(`${futureTotalHours}:0${leftMinutes}`)
    } else {
        console.log(`${futureTotalHours}:${leftMinutes}`)
    }
   

}

Time15Minutes(["1", "46"]);