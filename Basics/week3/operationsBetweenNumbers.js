function operationsBetweenNumbers(arr) {
    let n1 = Number(arr[0]);
    let n2 = Number(arr[1]);
    let operator = arr[2];

    let evenOrOdd = "";
    let result = 0;

    switch (operator) {
        case "+":
            result = n1 + n2;

            if(result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }

            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`)
            break;
        case "-":
            result = n1 - n2;
    
            if(result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
    
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`)
            break;
        case "*":
            result = n1 * n2;
    
            if(result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
    
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`)
            break;
        case "/":
            if(n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
                return;
            }
            result = n1 / n2;
            console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
            break;
        case "%":
            if(n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
                return;
            }
            result = n1 % n2;
            console.log(`${n1} ${operator} ${n2} = ${result}`);
            break;

    }

}
operationsBetweenNumbers(["10",
"0",
"%"])