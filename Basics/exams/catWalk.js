function catWalk(input) {
    let minutesOfWalk = Number(input[0]);
    let countOfWalksPerDay = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let caloriesBurned = minutesOfWalk * countOfWalksPerDay * 5;
    if(caloriesBurned >= caloriesPerDay * 0.5) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }


}
catWalk([15,
    2,
    500
    ])