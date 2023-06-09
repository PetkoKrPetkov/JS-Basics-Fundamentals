function minNum(arr) {
    let index = 0;
    let command = arr[index];
    index++;

    let minNumber = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop"){
        let n = Number(command);
        if(minNumber > n) {
            minNumber = n;
        }
        command = arr[index];
        index++

    }
console.log(minNumber);
}
minNum(["-1",
"-2",
"Stop"])
