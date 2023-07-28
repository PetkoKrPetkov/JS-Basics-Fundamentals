function stringSubstring(word, sentence) {
    let sentenceAsArr = sentence.split(' ');

    for (const i of sentenceAsArr) {
        let currentWord = i.toLocaleLowerCase();
        if(currentWord === word.toLocaleLowerCase()) {
            console.log(word);
            return;
        }
        
    }
    console.log(`${word} not found!`);dxjm,u22
    
    

}
stringSubstring('javascript', 'JavaScript is the best programming language'
)