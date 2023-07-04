function bombNumbers(array, bomb) {

    let bombNumber = bomb[0];
    let bombRadius = bomb[1];
    let indexOfBomb = array.indexOf(bombNumber);

    while (indexOfBomb !== -1) {
        let startExplosion = Math.max(0, indexOfBomb - bombRadius);
        let explosionLength = bombRadius * 2 + 1;

        array.splice(startExplosion, explosionLength);
        indexOfBomb = array.indexOf(bombNumber);
    }

    let sum = array.reduce((a, b) => a + b, 0);
    console.log(sum);


}
bombNumbers([1, 1, 2, 1, 1, 1,
    2, 1, 1, 1],
    [2, 1]
    
    )