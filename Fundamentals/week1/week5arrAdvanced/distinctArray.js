function distinctArray(arr) {

    let newArr = [];

    for(i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    // let counter = 0;
    // let arrLength = arr.length - counter;

    // for( let i = 0; i < arrLength; i++) {
    //     let currNum = Number(arr[i]);
        
    //     for(let j = 0; j < arr.length; j++) {
    //         let randomNum = Number(arr[j]);
    //         if( i != j) {
    //             if(currNum === randomNum) {
    //                 arr.splice(arr[j]);
    //                 counter++;
    //             }
    //         }
    //     }
    // }

    console.log(newArr.join(" "));

}
distinctArray([7, 8, 9, 7, 2, 3,
    4, 1, 2]
    )