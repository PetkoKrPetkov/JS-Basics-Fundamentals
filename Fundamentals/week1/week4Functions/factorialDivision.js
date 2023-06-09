function factorialDivision(num, divisor) {

    function factorial(number) {
        if(number === 0 ) {
            return 1;
        } else {
            return number * factorial(number - 1)
        }
    }

    let print = (factorial(num) / factorial(divisor));
    console.log(print.toFixed(2));

}
factorialDivision(5, 2);