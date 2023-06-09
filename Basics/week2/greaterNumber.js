function greaterNumber(input) {
    let nNumA = Number(input[0]);
    let nNumB = Number(input[1]);

    if (nNumA > nNumB) {
        console.log(nNumA);
    } else {
        console.log(nNumB);
    }

}

greaterNumber(["5", "3"]);