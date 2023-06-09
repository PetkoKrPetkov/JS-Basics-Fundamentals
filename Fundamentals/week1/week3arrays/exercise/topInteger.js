function topInteger(arr) {
  let topInt = [];

  for (let i = 0; i < arr.length; i++) {
    let currNumber = Number(arr[i]);
    let currNumberBoolean = true;

    for (let j = i + 1; j < arr.length; j++) {
      let secNumber = Number(arr[j]);

      if (currNumber <= secNumber) {
        currNumberBoolean = false;
        break;
      }
    }

    if (currNumberBoolean) {
      topInt.push(currNumber);
    }
  }

  console.log(topInt.join(' '));
}
topInteger([1, 4, 3, 2]);
