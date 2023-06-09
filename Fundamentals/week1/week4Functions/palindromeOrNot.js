function palindromeOrNot(arr) {

    for(i = 0; i < arr.length ; i++) {
        let currNum = arr[i].toString();
        let reversedNum = currNum.split("").reverse().join("");

        if(currNum === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}
palindromeOrNot([123,323,421,121]);