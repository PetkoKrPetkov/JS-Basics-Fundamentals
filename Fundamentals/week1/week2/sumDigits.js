function sumDigits(number) {
  let numAsString = number.toString();
  let sumOfDig = 0;

  for (let i = 0; i < numAsString.length; i++) {
    let curDig = Number(numAsString[i]);
    sumOfDig += curDig;
  }

  console.log(sumOfDig);
}
sumDigits(245678);
