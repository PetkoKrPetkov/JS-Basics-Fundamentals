function fancyBarcodes(input) {

    let countOfLines = Number(input.shift());
    let pattern = /(@#+)(?<string>[A-Z][A-Za-z\d]{4,}[A-Z])\1/;
    
    for (let i = 0; i < countOfLines; i++) {
        let line = input.shift();
        let isValid = pattern.test(line);

        if(isValid) {
            let digits = line.match(/\d/g);
            if(digits) {
                console.log(`Product group: ${digits.join('')}`);
            } else {
                console.log('Product group: 00');
            }
        } else {
            console.log("Invalid barcode");
        }

        
    }

}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
