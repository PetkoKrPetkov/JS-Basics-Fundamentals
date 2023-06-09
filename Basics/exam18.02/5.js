function bestPlayer(arr) {
    let index = 0;
    let name = arr[index];
    index++;
    
    let goalsRecord = 0;
    let bestPerformer ="";
    let hatTrick = false;

    while(name !== "END") {
        let goals = Number(arr[index]);
        index++;

        if(goals > goalsRecord) {
            goalsRecord = goals;
            bestPerformer = name;
        }
        if(goals > 2) {
            hatTrick = true;
        }
        if(goals >= 10) {
            break;
        }
        name = arr[index];
        index++;
    }

    console.log(`${bestPerformer} is the best player!`);
    if(hatTrick) {
        console.log(`He has scored ${goalsRecord} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goalsRecord} goals.`);
    }



}
bestPlayer(["Petrov",
"2",
"Drogba",
"11"])

