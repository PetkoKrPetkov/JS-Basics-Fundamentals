function sumEvenNums(numbers) {

    let sum = 0;

    for( i = 0; i < numbers.length; i++) {
        let currNumber = Number(numbers[i]);
        if(currNumber % 2 == 0) {
            sum += currNumber;
        }
    }

    console.log(sum);

}
sumEvenNums(['1','2','3','4','5','6']);