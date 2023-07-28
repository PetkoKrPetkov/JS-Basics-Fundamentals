function destinationMapper(str) {
  let regEx = /([=/])(?<cityName>[A-Z][A-Za-z]{2,})\1/g;

  let matches = str.matchAll(regEx);
  let destinations = [];
  let points = 0;

  for (const match of matches) {
    
      let currentCity = match.groups.cityName;
      destinations.push(currentCity);
      points += currentCity.length;
    
  }

  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${points}`);
}
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=/Cyprus/');
