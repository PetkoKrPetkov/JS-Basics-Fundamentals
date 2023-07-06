function huntingGames(input) {
  let daysOfAdventure = Number(input.shift());
  let playersCount = Number(input.shift());
  let energyOfTheGroup = Number(input.shift());
  let waterPerDayOnePerson = Number(input.shift());
  let foodPerDayOnePerson = Number(input.shift());

  let totalWaterNeeded = waterPerDayOnePerson * playersCount * daysOfAdventure;
  let totalFoodNeeded = foodPerDayOnePerson * playersCount * daysOfAdventure;

  let energy = true;
  let days = 0;

  for (let i = 0; i < input.length; i++) {
    days++;
    let energyLost = Number(input[i]);
    energyOfTheGroup -= energyLost;
    if (energyOfTheGroup <= 0) {
      energy = false;
      console.log(
        `You will run out of energy. You will be left with ${totalFoodNeeded.toFixed(
          2
        )} food and ${totalWaterNeeded.toFixed(2)} water.`
      );
      return;
    }

    if (days % 2 === 0) {
      energyOfTheGroup += 0.05 * energyOfTheGroup;
      totalWaterNeeded -= 0.3 * totalWaterNeeded;
    }

    if (days % 3 === 0) {
      totalFoodNeeded -= totalFoodNeeded / playersCount;
      energyOfTheGroup += 0.1 * energyOfTheGroup;
    }
  }

  if (energy) {
    console.log(
      `You are ready for the quest. You will be left with - ${energyOfTheGroup.toFixed(
        2
      )} energy!`
    );
  }
}
huntingGames([
  '10',

  '7',

  '5035.5',

  '11.3',

  '7.2',

  '942.3',

  '500.57',
  '520.68',
  '540.87',
  '505.99',
  '630.3',
  '784.20',
  '321.21',
  '456.8',
  '330',
]);
