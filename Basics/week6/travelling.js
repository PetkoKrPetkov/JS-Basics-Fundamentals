function travelling(arr) {
    let index = 0;
    let command = arr[index];
    index++;

    while(command !== "End") {
        let destination = command;
        let budget = Number(arr[index]);
        index++;
        let save = 0;
        while(save < budget) {
            let money = Number(arr[index]);
            index++;
            save += money;
        }
        console.log(`Going to ${destination}!`)
        command = arr[index];
        index++
    }
    

}
travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
