function multiplicationTable(arr) {
    for(let x = 1; x < 11; x++) {
        for(let y = 1; y < 11; y++) {
            let sum = x * y;
            console.log(`${x} * ${y} = ${sum}`)
        }
    }

}
multiplicationTable();