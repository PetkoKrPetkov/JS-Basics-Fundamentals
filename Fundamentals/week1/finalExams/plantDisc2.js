function plantDiscovery(input){
    let numOfPlants = input.shift();
    let plantObject = {};
    for (let index = 0; index < numOfPlants; index++) {
        let [plant, rarity] = input.shift().split("<->");
        plantObject[plant] = {rarity, rating: []};
    }
    let line = input.shift();
    while(line !== "Exhibition"){
    let [command, ...rest] = line.split(": ");
    let [plant, data] = rest[0].split(" - ");
    if(plantObject.hasOwnProperty(plant)){
    switch(command){
        case "Rate": 
        let rating = data;
        plantObject[plant].rating.push(rating);
        break;
        case "Update":
        let newRarity = data;
        plantObject[plant].rarity = newRarity;
        break;
        case "Reset":
            plantObject[plant].rating = [];
            break;
    }
    }else{
        console.log("error");
    }
     
    line = input.shift();
    }
    // let sortedPlants = Object.keys(plantObject).sort(
    //     (a, b) =>
    //     plantObject[b].rarity - plantObject[a].rarity ||
    //         averageRating(plantObject[b].rating) - averageRating(plantObject[a].rating)
    // );
    console.log("Plants for the exhibition:");
    //let sortedPlants = Object.entries
    for (const keys in plantObject) {
        console.log(`- ${keys}; Rarity: ${plantObject[keys].rarity}; Rating: ${averageRating(plantObject[keys].rating).toFixed(2)}`);
    }
    function averageRating(array) {
        let numArr = 0;
        if (array.length < 1) {
            return 0;
        }else{
        for(let i = 0; i < array.length; i++){
            let curNum = Number(array[i]);
            numArr += curNum;
        }
        return numArr / array.length;
        }
    }
    }