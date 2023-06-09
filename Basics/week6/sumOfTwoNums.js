function sumOfTwoNums (arr) {
    let start = Number(arr[0]);
    let finish = Number(arr[1]);
    let mn = Number(arr[2]);

    let isFound = false;

    let opCounter = 0;

    for(let x = start; x <= finish; x++) {
        for(let y = start; y <= finish; y++) {
            opCounter++;
            if(x + y === mn) {
                isFound = true;
                console.log(`Combination N:${opCounter} (${x} + ${y} = ${mn})`);
                return;
            }
        }
    }
    if(!isFound) {
        console.log(`${opCounter} combinations - neither equals ${mn}`);
    }


}
sumOfTwoNums(["23",
"24",
"20"])

