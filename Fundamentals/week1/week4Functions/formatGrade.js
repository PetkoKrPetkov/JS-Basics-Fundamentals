function formatGrade(grade) {
    let gradeName = "";

    if (grade < 3) {
        gradeName = "Fail";
    } else if(grade < 3.5) {
        gradeName = "Poor";
    } else if(grade < 4.5) {
        gradeName = "Good";
    } else if(grade < 5.5) {
        gradeName = "Very good";
    } else {
        gradeName = "Excellent";
    }

    if(gradeName === "Fail") {
        console.log(`${gradeName} (2)`);
    } else {
        console.log(`${gradeName} (${grade.toFixed(2)})`)
    }

}
formatGrade(3.99);