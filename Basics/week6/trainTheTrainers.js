function trainTheTrainers (arr) {
    let judges = Number(arr[0]);

    let index = 1;
    let command = arr[index];
    index++;

    let score = 0;
    let loops = 0;

    while(command !== "Finish") {
        let presentationName = command;
        let gradesSum = 0;

        for(let i = 1; i <= judges; i++) {
            let curGrade = Number(arr[index]);
            index++;
            gradesSum += curGrade;
        }

        let avgGrade = gradesSum / judges;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);
        command = arr[index];
        index++;

        score += avgGrade;
        loops++;
    }

    let avgScore = score / loops

    console.log(`Student's final assessment is ${avgScore.toFixed(2)}.`)

}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
