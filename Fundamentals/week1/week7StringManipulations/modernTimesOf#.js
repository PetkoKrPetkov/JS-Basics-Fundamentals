function modernTimesOf(input) {
  const textAsArr = input.split(' ');

  for (const currentWord of textAsArr) {
    let isValid = currentWord.startsWith('#') && currentWord.length > 1;
    let areAllCharsValid = true;

    for (let index = 1; index < currentWord.length; index++) {
      const element = currentWord[index];
      if (
        element.toLowerCase().charCodeAt() < 97 ||
        element.toLowerCase().charCodeAt() > 122
      ) {
        areAllCharsValid = false;
      }
    }

    if (isValid && areAllCharsValid) {
      let result = currentWord.substring(1);
      console.log(result);
    }
  }
}
modernTimesOf(
  'Nowadays everyone uses # to tag a #special word in #socialMedia'
);
