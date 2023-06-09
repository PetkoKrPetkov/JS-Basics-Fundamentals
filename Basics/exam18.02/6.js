function pinCodes(arr) {
    let n1 = Number(arr[0]);
    let n2 = Number(arr[1]);
    let n3 = Number(arr[2]);

    for(let i = 1; i <= n1; i++) {
        for(let x = 2; x <= n2; x++) {
            let isPrime = true;
            for(let devisor = 2; devisor < x ; devisor++) {      
                if(x % devisor === 0) {
                    isPrime === false;
                }
            }
                    for(let y = 1; y <= n3; y++) {
                        if( i % 2 === 0 &&
                         y % 2 === 0 &&
                            x <= 7 &&
                            isPrime === true) {
                                let pass = `${i} ${x} ${y}`
                                console.log(pass);
                        }

            }
        }
    }

    

}
pinCodes(["3",
"5",
"5"])
