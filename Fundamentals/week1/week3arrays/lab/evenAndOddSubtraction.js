function evenAndOddSubtraction(nums) {

    let sumEven = 0;
    let sumOdds = 0;

    for( let i = 0; i < nums.length; i++) {
       
        let currNum = Number(nums[i]);
        isEven = currNum % 2 == 0;
        if(isEven) {
            sumEven += currNum;
        } else {
            sumOdds+= currNum;
        }
    }

    console.log(sumEven - sumOdds);

}
evenAndOddSubtraction([1,2,3,4,5,6])