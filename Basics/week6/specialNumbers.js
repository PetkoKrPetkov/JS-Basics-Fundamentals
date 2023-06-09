function specialNumbers(arr) {
    let n = Number(arr[0]);

    let nums = ""

    for(let i = 1; i <= 9; i++) {
        for(let j = 1; j <= 9; j++) {
            for(let x = 1; x <= 9; x++) {
                for(let y = 1; y <= 9; y++) {
                    if (n % i  === 0 && 
                        n % j ===0 && 
                        n % x === 0 && 
                        n % y === 0) {

                        nums += `${i}${j}${x}${y} `

                        }

                }
            }
        }
    }


console.log(nums);
}
specialNumbers(["3"]);