function mirrorWords(str) {
  let string = str.shift();
  let pattern = /([@#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;

  let matches = string.match(pattern);

  if(matches) {
    console.log(`${matches.length} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }

  matches = string.matchAll(pattern);
  let mirrorWords = [];

  for (const match of matches) {
    let firstWord = match.groups.firstWord;
    let secondWord = match.groups.secondWord;

    if(firstWord === secondWord.split('').reverse().join('')) {
        mirrorWords.push(`${firstWord} <=> ${secondWord}`)
    }   
  }

  if(mirrorWords.length > 0) {
    console.log('The mirror words are:');
    console.log(`${mirrorWords.join(', ')}`);
  } else {
    console.log("No mirror words!");
  }
}
mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
