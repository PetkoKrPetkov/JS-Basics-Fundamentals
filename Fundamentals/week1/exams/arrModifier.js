function arrModifier(input) {

    let arr = input.shift().split(" ").map(Number);

    let currentLine = input.shift();

    while(currentLine !== "end") {
        let currentLineAsArr = currentLine.split(" ");
        let command = currentLineAsArr[0];
        let firstNum = Number(currentLineAsArr[1]);
        let secondNum = Number(currentLineAsArr[2]);

        if(command === "swap") {
            let buff = arr[firstNum];
            let buff2 = arr[secondNum];

            arr.splice(firstNum, 1, buff2);
            arr.splice(secondNum, 1, buff);
        }

        if(command === "multiply") {
            arr[firstNum] = arr[firstNum] * arr[secondNum];
        }

        if(command === "decrease") {
            arr = arr.map((x) => x - 1);
        }

        currentLine = input.shift();
    }

    console.log(arr.join(", "));

}
arrModifier(
    [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )