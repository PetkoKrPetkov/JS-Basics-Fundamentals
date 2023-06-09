function sumFirstAndLastArr(arr) {

    let array = arr

    let first = array[0];
    let last = array[array.length - 1];

    let sum = first + last;

    console.log(sum);

}
sumFirstAndLastArr([10, 17, 22, 33]);