function oddAndEvenSums(num) {

    let oddSum = 0;
    let evenSum = 0;

    let numToStr = String(num);

    for(let i = 0; i < numToStr.length; i++) {
        let currNumber = Number(numToStr[i]);

        if(currNumber % 2 === 0) {
            evenSum += currNumber;
        } else {
            oddSum += currNumber;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)



}
oddAndEvenSums(3495892137259234);