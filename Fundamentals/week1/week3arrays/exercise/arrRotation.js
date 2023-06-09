function arrRotation(arr, numsRotation) {
  for (let i = 0; i < numsRotation; i++) {
    arr.push(arr[i - i]);
    arr.shift();
  }

  console.log(arr.join(' '));
}
arrRotation([51, 47, 32, 61, 21], 2);
