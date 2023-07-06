function replaceRepeatingChar(string) {

    let result = string[0];
    let currentChar = string[0];

    for (let i = 0; i < string.length; i++) {
        if(string[i] !== currentChar) {
            result += string[i];
            currentChar = string[i];
        }
        
    }
    console.log(result);

}
replaceRepeatingChar('aaaaabbbbbcdddeeeedssaa')