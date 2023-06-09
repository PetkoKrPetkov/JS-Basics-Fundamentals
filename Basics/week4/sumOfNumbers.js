function sumOfNumbers(arr) {
    let n = arr[0];
    let num = 0;

    for( let i = 0; i < n.length; i++) {
        let number = Number(n[i]);
        num += number;
    }

    console.log(`The sum of the digits is:${num}`);


}
sumOfNumbers(["564891"]);