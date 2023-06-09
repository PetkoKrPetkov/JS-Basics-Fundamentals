function maxNumber(arr) {
    let index = 0;
    let command = arr[index];
    index++;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while(command !== "Stop"){
        let n = Number(command);
        if(maxNumber < n) {
            maxNumber = n;
        }
        command = arr[index];
        index++

    }
console.log(maxNumber);
}
maxNumber(["-1",
"-2",
"Stop"])

