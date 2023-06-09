function tennisRanklist(arr) {
    let tournamentsCount = Number(arr[0]);
    let pointsAtStart = Number(arr[1]);
    let pointsPerResult = 0
    let tournamentsWonCounter = 0;

    for (let i = 2; i <= tournamentsCount + 1; i++) {
        let tournamentResult = arr[i];
        switch(tournamentResult) {
            case "SF":
                pointsPerResult +=720;
                break;
            case "F":
                pointsPerResult +=1200;
                break;
            case "W":
                pointsPerResult +=2000;
                tournamentsWonCounter++;
                break;
        }  
    }
     let finalPoints = pointsAtStart + pointsPerResult;
     let avaragePointsperTournament = pointsPerResult / tournamentsCount;
     let percentageOfTournamentsWon = tournamentsWonCounter / tournamentsCount * 100;

     console.log(`Final points: ${finalPoints}`);
     console.log(`Average points: ${Math.floor(avaragePointsperTournament)}`);
     console.log(`${percentageOfTournamentsWon.toFixed(2)}%`);


}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"]);