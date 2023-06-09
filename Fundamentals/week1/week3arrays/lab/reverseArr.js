function reverseArr(count, arr) {

    let newArr = [];

    for(let i = 0; i < count; i++) {
       newArr[i] = arr[count - 1 - i];
       
    }

    let result = "";

    for(let i = 0; i < newArr.length; i++) {

        result += newArr[i]

        if(i < newArr.length - 1) {
            result += " ";
        }

    }

    console.log(result);
    
    // console.log(newArr.join(" "));

    // for(i = count ; i >=0; i--) {
    //     newArr.push(arr[i])
    // }

    // console.log(newArr.join(" "));

}
reverseArr(3, [10, 20, 30, 40, 50]);