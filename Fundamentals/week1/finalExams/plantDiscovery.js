function plantDiscovery(input) {
  let countOfPlants = Number(input.shift());
  let collectionPlantsAsArray = [];

  for (let i = 0; i < countOfPlants; i++) {
    let [plant, rarity] = input.shift().split('<->');
    let obj = {
      rarity: rarity,
      rating: 0,
      counter: 0
    };

    collectionPlantsAsArray[plant] = obj;
  }

  let line = input.shift();

  while (line !== 'Exhibition') {
    let [command, rest] = line.split(': ');
    if (command === 'Rate') {
      let [currPlant, newRating] = rest.split(' - ');
      if (collectionPlantsAsArray[currPlant]) {
        collectionPlantsAsArray[currPlant].rating += Number(newRating);
        collectionPlantsAsArray[currPlant].counter++;
      } else {
        console.log('error');
      }
    }

    if (command === 'Update') {
      let [currPlant, newRarity] = rest.split(' - ');
      if (collectionPlantsAsArray[currPlant]) {
        collectionPlantsAsArray[currPlant].rarity = newRarity;
      } else {
        console.log('error');
      }
    }

    if (command === 'Reset') {
      let currPlant = rest;
      if (collectionPlantsAsArray[currPlant]) {
        collectionPlantsAsArray[currPlant].rating = 0;
      } else {
        console.log('error');
      }
    }
   
    line = input.shift();
  }
  console.log('Plants for the exhibition:');
  for (const plant in collectionPlantsAsArray) {
    let obj = collectionPlantsAsArray[plant];
    console.log(
      `- ${plant}; Rarity: ${obj.rarity}; Rating: ${(obj.rating / obj.counter).toFixed(2)}`
    );
  }
}

plantDiscovery([
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
  'Update: Wood - 5',
  'Exhibition',
]);

