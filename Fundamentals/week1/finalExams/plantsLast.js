function plantLast(input) {
  let nOfPlants = Number(input.shift());
  let plants = {};
  for (let i = 0; i < nOfPlants; i++) {
    let [plantName, rarity] = input.shift().split('<->');
    plants[plantName] = {
      rarity: Number(rarity),
      ratings: [],
    };
  }

  

  let currLine = input.shift();
  while (currLine !== 'Exhibition') {
    let [command, args] = currLine.split(': ');
    let [name, arg] = args.split(' - ');

    if (plants[name]) {
      switch (command) {
        case 'Rate':
          let currentRating = Number(arg);
          plants[name].ratings.push(currentRating);
          break;
        case 'Update':
          let newRarity = Number(arg);
          plants[name].rarity = newRarity;
          break;
        case 'Reset':
          plants[name].ratings = [];
          break;
      }
    } else {
      console.log('error');
    }
    currLine = input.shift();
  }
  console.table(plants)

  console.log('Plants for the exhibition:');
  for (const plantName in plants) {
    let sumOfRatings = 0;
    let countOfRatings = plants[plantName].ratings.length;
    for (const currRating of plants[plantName].ratings) {
      sumOfRatings += currRating;
    }
    let averageRating = sumOfRatings / countOfRatings;
    if (!averageRating) {
      averageRating = 0;
    }
    console.log(
      `- ${plantName}; Rarity: ${
        plants[plantName].rarity
      }; Rating: ${averageRating.toFixed(2)}`
    );
  }
}
plantLast([
  '3',
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition',
]);
