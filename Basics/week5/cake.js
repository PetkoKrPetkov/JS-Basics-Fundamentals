function cake(arr) {
    let index = 0;

    let length = Number(arr[index]);
    index++;
    let width = Number(arr[index]);
    index++;
    let pieces = length * width;

    let command = arr[index];
    index++;

    let piecesCounter = 0;

    while(command !== "STOP") {
        pieces -= Number(command);
        if(pieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
            break;
        }
        command = arr[index];
        index++;
    }

    if(command === "STOP") {
        console.log(`${pieces} pieces are left.`);
    }

}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

