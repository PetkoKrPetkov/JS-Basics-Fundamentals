function equalArrays(arr1, arr2) {

    let sumOfArr = 0;
    let isEqual = true;
    let counter = 0;

    for(let i = 0; i < (arr1.length + arr2.length) / 2; i++) {
        let pos1 = Number(arr1[i]);
        let pos2 = Number(arr2[i]);

        if(pos1 == pos2) {
            sumOfArr += pos1;
            counter++;
        } else {
            isEqual = false;
        }

        if(!isEqual) {         
            console.log(`Arrays are not identical. Found difference at ${counter} index`)
            break;
        }   
    }

    if(isEqual) {
        console.log(`Arrays are identical. Sum: ${sumOfArr}`);
    }

}
equalArrays(['1','2','3','4','5'], 
['1','2','4','4','5']
);