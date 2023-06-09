function building(arr) {
    let x = Number(arr[0]);
    let y = Number(arr[1]);

    for(let a = x; a > 0; a--) {
        let buff = ""
        for(let b = 0; b < y; b++) {
            if(a === x) {
                buff += "L" + a + b + " ";
            } else if (a % 2 ===0) {
                buff += "O" + a + b + " ";
            } else {
                buff += "A" + a + b + " ";
            }
        }
        console.log(buff);
    }


}
building(["6", "4"]);