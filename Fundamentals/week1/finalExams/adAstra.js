function adAstra(input) {
  let text = input.shift();
  let callories = 0;
  let calloriesPerDay = 2000;

  let pattern =
  /([|#])(?<item>[A-Z][a-z]+[ ]*[A-Z]*[a-z]*)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<callories>\d{0,4})\1/g;

  let results = [...text.matchAll(pattern)];

  for (const result of results) {
    let currentCallories = Number(result[4]);
    callories += currentCallories;
  }

  let daysInOpenSpace = callories / calloriesPerDay;
  let days = Math.floor(daysInOpenSpace);
  console.log(`You have food to last you for: ${days} days!`);
  if(results.length > 0) {

      for (const result of results) {
        console.log(
          `Item: ${result.groups.item}, Best before: ${result.groups.date}, Nutrition: ${result.groups.callories}`
        );
      }
  }
}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);
