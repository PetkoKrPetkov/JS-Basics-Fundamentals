function dishwasher(arr) {
    let index = 0;
    let bottles = Number(arr[0]);
    index++;
    let mL = bottles * 750;

    let command = arr[index];
    index++;
    
    let dishesWashed = 0;
    let potsWashed = 0;
    let loads = 0;

    while(command !== "End") {
        if(mL < 0) {
            break;
        }
        loads++;
        let dishesCount = Number(command);
        if(loads % 3 ===0) {
            mL -= dishesCount * 15;
            potsWashed += dishesCount;
        } else {
            mL -= dishesCount * 5;
            dishesWashed += dishesCount;
        }
        command = arr[index];
        index++;
    }

    if(mL >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishesWashed} dishes and ${potsWashed} pots were washed.`);
        console.log(`Leftover detergent ${mL} ml.`);
    } else {
        console.log(`Not enough detergent, ${Number(Math.abs(mL))} ml. more necessary!`);
    }

}
dishwasher(["2","53","65","55","End"]);