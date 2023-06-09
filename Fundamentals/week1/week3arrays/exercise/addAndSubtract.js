function addAndSubtract(arr) {
  let newArr = [];
  let sumArr = 0;
  let sumNewArr = 0;
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let currNum = Number(arr[i]);
    sumArr += currNum;

    if (currNum % 2 == 0) {
      currNum += i;
    } else {
      currNum -= i;
    }
    newArr.push(currNum);
    sumNewArr += currNum;
  }

  console.log(newArr);
  console.log(sumArr);
  console.log(sumNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
