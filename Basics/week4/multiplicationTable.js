function multiplicationTable(arr) {
    let multiplicationFavtor = Number(arr[0]);
    for (let index = 1; index <= 10; index++) {
        console.log(`${index} * ${multiplicationFavtor} = ${index * multiplicationFavtor}`);
        
    }

}
multiplicationTable(["5"]);