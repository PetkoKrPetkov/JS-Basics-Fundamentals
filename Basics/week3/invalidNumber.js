function invalidNumber(arr) {
    let number = Number(arr[0]);

    if (number >=100 && number <=200 || number ==0) {
        number = true
    } else {
        console.log("invalid");
    }
}
invalidNumber(["150"]);