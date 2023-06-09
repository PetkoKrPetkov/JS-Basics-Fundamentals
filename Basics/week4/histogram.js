function histogram(arr) {
    let inputCount = Number(arr[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= inputCount; i++) {
        let curNum = Number(arr[i])
        if(curNum < 200) {
            p1++;
        } else if(curNum <=399) {
            p2++;
        } else if(curNum <= 599) {
            p3++;
        } else if(curNum <= 799) {
            p4++;
        } else {
            p5++;
        }
    }
    console.log(`${(p1 / inputCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / inputCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / inputCount * 100).toFixed(2)}%`);
    console.log(`${(p4 / inputCount * 100).toFixed(2)}%`);
    console.log(`${(p5 / inputCount * 100).toFixed(2)}%`);

}
histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])
