function numbers(input) {
  let arr = input.split(' ').map(Number);

  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  let avarageSum = sum / arr.length;

  let output = [];
  

  for (const num of arr) {
    if (num > avarageSum) {
        output.push(num);
    }
  }

  output = output.sort((a, b) => b - a);
  let toPrint = output.slice(0, 5);

  if(output.length >= 1) {
    console.log(toPrint.join(" "));
  } else {
    console.log("No");
  }

  
}
numbers('1');
