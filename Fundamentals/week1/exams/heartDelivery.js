function heartDelivery(input) {
  let neighborhood = input.shift().split('@').map(Number);

  let currentLine = input.shift();

  let currentIndexHouse = 0;

  while (currentLine !== 'Love!') {
    let currArr = currentLine.split(' ');
    let jumpLength = Number(currArr[1]);

    currentIndexHouse += jumpLength;

    if (currentIndexHouse >= neighborhood.length ) {
      currentIndexHouse = 0;
    }

    if (neighborhood[currentIndexHouse] <= 0) {
      console.log(`Place ${currentIndexHouse} already had Valentine's day.`);
    } else {
      neighborhood[currentIndexHouse] -= 2;
      if (neighborhood[currentIndexHouse] === 0) {
        console.log(`Place ${currentIndexHouse} has Valentine's day.`);
      }
    }

    currentLine = input.shift();
  }

  let valetninesHouses = neighborhood.filter((x) => x === 0);

  console.log(`Cupid's last position was ${currentIndexHouse}.`);

  if (valetninesHouses.length === neighborhood.length) {
    console.log('Mission was successful.');
  } else {
    console.log(`Cupid has failed ${neighborhood.length - valetninesHouses.length} places.`);
  }
}
heartDelivery([
  '2@4@2',
  'Jump 2',
  'Jump 2',
  'Jump 8',
  'Jump 3',
  'Jump 1',
  'Love!',
]);
