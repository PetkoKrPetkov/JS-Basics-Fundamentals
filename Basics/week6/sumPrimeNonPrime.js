function sumPrimeNonPrime(arr) {
    let index = 0;

    let command = arr[index];
    index++;

    let sumPrime = 0;
    let nonPrime = 0;

    while(command !== "stop") {
        let num = Number(command);

        if(num < 0) {
            console.log("Number is negative.");
            command = arr[index];
            index++
            continue;
        }

        let isPrime = true;

        for(devidor = 2; devidor < num; devidor++) {
            if(num % devidor === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            sumPrime += num;
        } else {
            nonPrime += num;
        }

        command = arr[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);

}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])
