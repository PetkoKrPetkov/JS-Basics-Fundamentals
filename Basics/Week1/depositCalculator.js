//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yeld = Number(input[2]);

    let yeldDecimal = yeld / 100;

    let finalSume = depositedSum + depositPeriod * ((depositedSum * yeldDecimal) / 12);

    console.log(finalSume);
}



depositCalculator(["200", "3", "5.7"]);