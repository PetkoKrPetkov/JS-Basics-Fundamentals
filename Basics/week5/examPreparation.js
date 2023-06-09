function examPreparation (arr) {
    let index = 0;
     
    let numberBadGrades = Number(arr[index]);
    index++;

    let problemName = arr[index];
    index++;

    let currentGrade = Number(arr[index]);
    index++;

    let gradeCounter = 0;
    let numberOfProblems = 0;
    let badGradesCounter = 0;

    let lastProblem = "";

    while(problemName !== "Enough") {
        lastProblem = problemName;

        if(currentGrade <= 4) {
            badGradesCounter++;
        }

        if(badGradesCounter === numberBadGrades) {
                console.log(`You need a break, ${badGradesCounter} poor grades.`);
                return;
        }
  
        gradeCounter += currentGrade;
        numberOfProblems++;

        problemName = arr[index];
        index++;
        currentGrade = Number(arr[index]);
        index++
    }
    console.log(`Average score: ${(gradeCounter / numberOfProblems).toFixed(2)}`);
    console.log(`Number of problems: ${numberOfProblems}`);
    console.log(`Last problem: ${lastProblem}`);

}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


