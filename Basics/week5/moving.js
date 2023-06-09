function moving(arr) {
    let index = 0;

    let width = Number(arr[index]);
    index++;
    let length = Number(arr[index]);
    index++;
    let height = Number(arr[index]);
    index++;
    let appVolume = width * length * height;

    let command = arr[index];
    index++;

    

    while(command !== "Done") {
        let boxCount = Number(command);

        appVolume -= boxCount;

                
        if(appVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(appVolume)} Cubic meters more.`)
            return;
        }

        command = arr[index];
        index++;
    }

    if(command === "Done") {
        console.log(`${appVolume} Cubic meters left.`);
    }

}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

// moving(["10", 
// "1",
// "2",
// "4", 
// "6",
// "Done"])
