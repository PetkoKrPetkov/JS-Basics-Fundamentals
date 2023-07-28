function emojiDetector(input) {
  let text = input.shift();
  let treshHold = 1;
  let digitsMatch = text.matchAll(/\d/g);
  for (const digit of digitsMatch) {
    let d = +digit[0];
    treshHold *= d;
  }
  console.log(`Cool threshold: ${treshHold}`);
  let pattern = /(:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g;
  let emojiMatches = text.matchAll(pattern);
  let emojiArr = [];
  let emojiesFound = 0;

  for (const emoji of emojiMatches) {
    let currentEmoji = emoji.groups.word;
    let emojiPoints = 0;
    emojiesFound++;
    for (let i = 0; i < currentEmoji.length; i++) {
      let letterAsCharCode = currentEmoji.charCodeAt(i);
      emojiPoints += letterAsCharCode;
    }
    if (emojiPoints >= treshHold) {
      emojiArr.push(emoji[0]);
    }
  }

  console.log(
    `${emojiesFound} emojis found in the text. The cool ones are:`
  );
  for (const i of emojiArr) {
    console.log(i);
  }
}
emojiDetector([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);
