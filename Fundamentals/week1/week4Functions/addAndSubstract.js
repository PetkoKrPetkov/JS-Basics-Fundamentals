function addAndSubstract(first, second, last) {
    function add(a, b) {
        let sumOfTwo = a + b;
        return sumOfTwo;
    }

    function substract(sum, last) {
        let finalSum = sum - last;
        return finalSum
    }

    let sum = add(first, second);
    let toBePrinted = substract(sum, last);
    console.log(toBePrinted);
}
addAndSubstract(1,
    17,
    30)