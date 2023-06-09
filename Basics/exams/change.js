function change(input) {
    let bitcoinCount = Number(input[0]);
    let yuansCount = Number(input[1]);
    let comissionPercent = Number(input[2]) * 0.01;

    let bitcoinsInLv = bitcoinCount * 1168;
    let yuansInLv = yuansCount * 0.15 * 1.76;
    let totalMoneyInEur = (bitcoinsInLv + yuansInLv) / 1.95;
    let comission = comissionPercent * totalMoneyInEur;
    let moneyLeft = totalMoneyInEur - comission;
    console.log(moneyLeft.toFixed(2));

}
change([20,
    5678,
    2.4
    ]);