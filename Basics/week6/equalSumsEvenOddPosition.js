function equalSumsEvenOddPosition(arr) {
    let start = Number(arr[0]);
    let end = Number(arr[1]);
    let result = "";

    for(let x = start; x <= end; x++) {
        let oddSum = 0;
        let evenSum = 0;

        let xToString = x.toString();

        for(let index = 0; index < xToString.length; index++) {
            let xDigit = Number(xToString[index]);

            let position = index + 1;

            if (position % 2 === 0) {
                evenSum += Number(xDigit);
            } else {
                oddSum += Number(xDigit);
            }
        }

        if(oddSum === evenSum) {
            result += xToString + " ";
        }
    }

    console.log(result);

}
equalSumsEvenOddPosition(["100000",
"100050"])
