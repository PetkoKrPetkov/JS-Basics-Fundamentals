function charactersInRange(firstSymbol, secondSymbol) {

    let start = Math.min(firstSymbol.charCodeAt(), secondSymbol.charCodeAt());
    let end = Math.max(firstSymbol.charCodeAt(),secondSymbol.charCodeAt());
    let finalString = "";

    for(currentCount = start + 1; currentCount < end; currentCount++) {
        let currSymbol = String.fromCharCode(currentCount);
        
        if(currentCount + 1 === end) {
            finalString += (`${currSymbol}`);
        } else {
            finalString += (`${currSymbol} `);
        }
    }

    console.log(finalString);
}
charactersInRange('C',
'#'
)