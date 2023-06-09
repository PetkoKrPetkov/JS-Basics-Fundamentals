function architectsProject(input) {
    let architectsName = (input[0]);
    let numberOfProjects = Number(input[1]);
    let hoursNeeded = 3 * numberOfProjects;
    console.log(`The architect ${architectsName} will need ${hoursNeeded} hours to complete ${numberOfProjects} project/s.`)

}

architectsProject(["George ", "4"]);