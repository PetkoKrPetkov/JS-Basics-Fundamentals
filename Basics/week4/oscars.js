function oscars(arr) {
    let name = arr[0];
    let points = Number(arr[1]);
    let evaluatorsCount = Number(arr[2]);

    for(let i = 3; i < arr.length ; i +=2) {
        
        let pointsFromName = arr[i].length;
        let pointsFromNumber = Number(arr[i + 1]);

        let result = pointsFromName * pointsFromNumber / 2;
        points += result;
        
        if(points > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`)
            return;
        }
    }
    let pointsNeeded = 1250.5 - points;
    console.log(`Sorry, ${name} you need ${pointsNeeded.toFixed(1)} more!`);
       
}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
