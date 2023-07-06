function houseParty(arr) {
  let list = [];

  for (let i = 0; i < arr.length; i++) {
    let currentSentence = arr[i];
    let sentenceAsArr = currentSentence.split(' ');
    let currentName = sentenceAsArr[0];

    if (!sentenceAsArr.includes('not')) {
      if (list.includes(currentName)) {
        console.log(`${currentName} is already in the list!`);
      } else {
        list.push(currentName);
      }
    } else {
      if (list.includes(currentName)) {
        let indexToBeRemoved = list.indexOf(currentName);
        list.splice(indexToBeRemoved, 1);
      } else {
        console.log(`${currentName} is not in the list!`);
      }
    }
  }

  for (let i = 0; i < list.length; i++) {
    let name = list[i];
    console.log(name);
  }
}
houseParty([
  'Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!',
]);
