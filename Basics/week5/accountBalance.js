function accountBalance(arr) {
    let index = 0;
    let command = arr[index];
    index++;

    let total = 0;

    while(command !== "NoMoreMoney") {
        if(Number(command) < 0) {
            console.log("Invalid operation!")
            break;
        }
        console.log("Increase: " + Number(command).toFixed(2))
        total += Number(command);
        command = arr[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);

}
accountBalance(["120",
"45.55",
"-150"])

