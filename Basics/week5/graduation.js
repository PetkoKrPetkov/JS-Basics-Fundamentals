function graduation(arr) {
   let index = 0;
   let name = arr[index];
   index++;

   let grade = Number(arr[index]);
   index++;
   let i = 1;
   let badGrades = 0;
   let sumGrades = 0;

   while(i<=12) {
        if(grade < 4) {
            badGrades++;
            if(badGrades === 2) {
                break;
            }
            grade = Number(arr[index]);
            index++;
            continue;
        }
        i++;
        sumGrades += grade;
        grade = Number(arr[index]);
        index++;
   }

   if(badGrades < 2) {
    console.log(`${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`);
   } else {
    console.log(`${name} has been excluded at ${i} grade`)
   }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
