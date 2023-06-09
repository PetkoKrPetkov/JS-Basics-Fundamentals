function train(arr) {

    let trainWagons = arr.shift().split(" ").map(Number);
    let maxCapacity = Number(arr.shift());
    let length = arr.length

    for(index = 0; index < length; index++) {
        let command = arr[index].split(" ");
        if(command[0] === "Add") {
            trainWagons.push(Number(command[1]));
        } else {
            let currPassengers = Number(command[0]);
            for(i = 0; i < trainWagons.length; i++) {
                if(trainWagons[i] + currPassengers <= maxCapacity) {
                    trainWagons[i] += currPassengers;
                    break;
                }
            }
        }

    }

    console.log(trainWagons.join(" "));

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])