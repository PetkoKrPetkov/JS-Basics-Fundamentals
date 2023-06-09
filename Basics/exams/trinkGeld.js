function trinkGeld(input) {
    let daysOfWork = Number(input[0]);
    let trinkGeld = Number(input[1]);
    let totalPoints = Number(input[2]);
    let name = input[3];
    let totalDaysOfWorkForAll = Number(input[4]);

    let points;
    if(name === "Petko") {
        points = 5;
    } else if (name === "Brian") {
        points = 8;
    } else if (name === "Naomi") {
        points = 7;
    } else if (name === "Omid") {
        points = 2;
    } else if (name === "Azubi") { 
        points = 2;
    }
    
    let pointsForWeek = points * daysOfWork
    let totalPointsTeam = totalPoints * daysOpen;


    let percentageOfYourPoints = pointsForWeek / totalPointsTeam;
    let serviceTrinkGeld = 0.6 * trinkGeld;
    let yourTrinkgeld = serviceTrinkGeld * percentageOfYourPoints;

    
    console.log(`${name}${"`s"} Trinkgeld is ${yourTrinkgeld.toFixed(2)} !`);

}
trinkGeld([3, 2000, 24, "Petko", 22]);