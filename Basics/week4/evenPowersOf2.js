function evenPowersOf2(arr) {
    let n = Number(arr[0]);
    let num = 1;

    for( let i = 0; i <= n; i+=2) {
        console.log(num);
        num = num * 2 * 2;
    }


}
evenPowersOf2(["7"]);