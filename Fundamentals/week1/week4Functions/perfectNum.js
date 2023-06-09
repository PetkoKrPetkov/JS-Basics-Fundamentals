function perfectNum(num) {

    let numsHolder = 0;

    for( let i = 1; i < num; i++) {
        let currNum = Number(i);
        if (num % currNum === 0) {
            numsHolder += currNum;
        }
    }

    if( numsHolder > 0 && numsHolder === num) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.");
    }

}
perfectNum(1236498);