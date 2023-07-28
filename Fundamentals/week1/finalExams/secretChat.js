function secretChat(input) {
  let message = input.shift();
  let line = input.shift();

  while (line !== 'Reveal') {
    let [command, ...args] = line.split(':|:');

    switch (command) {
      case 'InsertSpace':
        let [indexToBeInserted] = args;
        indexToBeInserted = +indexToBeInserted;
        message =
          message.substring(0, indexToBeInserted) +
          ' ' +
          message.substring(indexToBeInserted);
        console.log(message);
        break;
      case 'Reverse':
        let [substr] = args;
        if (message.includes(substr)) {
          let reversedSub = substr.split('').reverse().join('');
          message = message.replace(substr, '') + reversedSub;
          console.log(message);
        } else {
          console.log('error');
        }
        break;
      case 'ChangeAll':
        let [subLetter, replaceLetter] = args;
        let pattern = new RegExp(subLetter, 'g');
        message = message.replace(pattern, replaceLetter);
        console.log(message);
        break;
    }

    line = input.shift();
  }

  console.log(`You have a new text message: ${message}`);
}
secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal',
]);
