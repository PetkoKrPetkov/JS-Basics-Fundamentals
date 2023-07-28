function splitter(input) {
    let result = input[0];
    let lowerCase = input.toLowerCase();

    for (let index = 1; index < input.length; index++) {
        if(input[index]  !== lowerCase[index]) {
            result += ', ';
        }
        result +=input[index];
       
    }
    console.log(result);
}
splitter('HoldTheDoor')