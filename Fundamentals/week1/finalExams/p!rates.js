function pirates(input) {
    let cities = {};

    let lineCity = input.shift();
    while(lineCity !== 'Sail') {
        let [city, people, gold] = lineCity.split('||');
        cities[city] = {
            people: Number(people),
            gold: Number(gold)
        }
        lineCity = input.shift();
    }
    

    let commandLine = input.shift();
    while(commandLine !== 'End') {
        let [command, city, arg1, arg2] = commandLine.split('=>');
        switch (command) {
            case 'Plunder':
                let currentPeople = Number(arg1);
                let currentGold = Number(arg2);
                cities[city].people -= currentPeople;
                cities[city].gold -= currentGold;
                console.log(`${city} plundered! ${currentGold} gold stolen, ${currentPeople} citizens killed.`);
                if(cities[city].people <= 0 || cities[city].gold <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete cities[city];

                }
                break;
        
            case 'Prosper':
                let gold = Number(arg1);
                if(gold <= 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    cities[city].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
                }
                break;
        }
        commandLine = input.shift();
        
    }
    let citiesCountArr = Object.keys(cities);
        if(citiesCountArr.length > 0) {
            console.log(`Ahoy, Captain! There are ${citiesCountArr.length} wealthy settlements to go to:`);
            for (const city in cities) {
                console.log(`${city} -> Population: ${cities[city].people} citizens, Gold: ${cities[city].gold} kg`);
            }
        } else {
            console.log("Ahoy, Captain! All targets have been plundered and destroyed!"
            );
        }

    
}
pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]))