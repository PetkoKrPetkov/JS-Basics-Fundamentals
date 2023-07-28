function thePianist(input) {
  const countOfPieces = Number(input.shift());
  let myCollection = {};

  for (let index = 0; index < countOfPieces; index++) {
    let [piece, composer, key] = input.shift().split('|');
    myCollection[piece] = [composer, key];
  }

  let line = input.shift();

  while (line !== 'Stop') {
    let [command, piece, composer, key] = line.split('|');

    if (command === 'Add') {
      if (!myCollection.hasOwnProperty(piece)) {
        myCollection[piece] = [composer, key];
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    }

    if (command === 'Remove') {
      if (myCollection.hasOwnProperty(piece)) {
        delete myCollection[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }

    if (command === 'ChangeKey') {
      if (myCollection.hasOwnProperty(piece)) {
        myCollection[piece][1] = composer;
        console.log(`Changed the key of ${piece} to ${composer}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }

    line = input.shift();
  }

  let myCollectionAsArr = Object.entries(myCollection);


  for (const iterator of myCollectionAsArr) {
    console.log(`${iterator[0]} -> Composer: ${iterator[1][0]}, Key: ${iterator[1][1]}`);
  }
}
thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop',
]);
