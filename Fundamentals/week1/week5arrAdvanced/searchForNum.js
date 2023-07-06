function searchForNum(arr, manipulations) {

    let newArrlength = manipulations[0];
    let elementsToDel = manipulations[1];
    let searchedNum = manipulations[2];

    let newArr = arr.slice(0, newArrlength);

    for(let i = 0; i < elementsToDel; i++) {
        newArr.shift();
    }
    
    let numCount = newArr.filter(el => el === searchedNum);

    console.log(`Number ${searchedNum} occurs ${numCount.length} times.`);



}
searchForNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )