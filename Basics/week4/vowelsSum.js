function vowelsSum(arr) {
    let word = arr[0];
    let points = 0;

    for( let i = 0; i < word.length; i++) {
        let letter = word[i];
        switch(letter) {
            case "a":
                points +=1;
                break;
            case "e":
                points +=2;
                break;
            case "i":
                points +=3;
                break;
            case "o":
                points +=4;
                break;
            case "u":
                points +=5;
                break;
        }
    }
  
    console.log(points);

}
vowelsSum(["bamboo"]);