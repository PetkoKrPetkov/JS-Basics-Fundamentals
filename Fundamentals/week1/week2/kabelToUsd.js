function kabelToUsd(num) {
    let kurs = 1.31;

    let output = num * kurs;
    console.log(output.toFixed(3));

}
kabelToUsd(80);