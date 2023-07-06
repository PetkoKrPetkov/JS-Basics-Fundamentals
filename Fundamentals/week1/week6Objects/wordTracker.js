function wordTracker(input) {

    let map = new Map();

    let wordsToCheck = input.shift().split(" ");

    wordsToCheck.forEach(word => {
        map.set(word, 0);
    });

    for (const line of input) {
        for (const word of wordsToCheck) {

            if(line === word) {
                let currQuantity = map.get(line);
                map.set(line, currQuantity + 1);
            }
            
        }
    }

    let sortedWords = Array.from(map.entries()).sort((a,b)=> b[1] - a[1]);

    for (const iterator of sortedWords) {
        console.log(`${iterator[0]} - ${iterator[1]}`);
        
    }

}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])