function minerTask(input) {

    let resourses = {};

    for (let index = 0; index < input.length; index+=2) {
        let preciousMetal = input[index];
        let quantity = Number(input[index + 1]);

        if(!resourses.hasOwnProperty(preciousMetal)) {
            resourses[preciousMetal] = quantity;
        } else {
            resourses[preciousMetal] += quantity;
        }
        
    }

    let resourcesAsArr = Object.entries(resourses);

    for (const resourseAndQuantArr of resourcesAsArr) {
        let [resourse, quantity] = resourseAndQuantArr;
        console.log(`${resourse} -> ${quantity}`);
        
    }

}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])