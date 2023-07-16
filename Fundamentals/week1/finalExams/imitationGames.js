function imitationGames(input) {
  let message = input.shift();

  let line = input.shift();

  while (line !== 'Decode') {
    let currentLine = line.split('|');

    let command = currentLine[0];


    if (command === 'Move') {
      let countOfLetters = Number(currentLine[1]);
      let secondPart = message.substring(0, countOfLetters);
      let firstPart = message.substring(countOfLetters);
      message = firstPart + secondPart;
    }

    if (command === 'Insert') {
      let index = Number(currentLine[1]);
      let value = currentLine[2];

      let firstPart = message.substring(0, index);
      let secondPart = message.substring(index);
      message = firstPart + value + secondPart;
    }

    if (command === 'ChangeAll') {
      let toBeChanged = currentLine[1];
      let newLetter = currentLine[2];

      let result = message.indexOf(toBeChanged);
      while (result > -1) {
        message = message.replace(toBeChanged, newLetter);
        result = message.indexOf(toBeChanged);
      }
    }

    line = input.shift();
  }

  console.log(`The decrypted message is: ${message}`);
}
imitationGames([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);
