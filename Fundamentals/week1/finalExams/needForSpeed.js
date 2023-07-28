function needForSpeed(input) {

    let cars = {};
    let nOfCars = Number(input.shift());
    for (let index = 0; index < nOfCars; index++) {
        let [car, mileage, fuel] = input.shift().split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }     
    }
   
    let line = input.shift();
    while(line !== 'Stop') {
        let [command, car, arg1, arg2] = line.split(' : ');
        switch (command) {
            case 'Drive':
                let distance = Number(arg1);
                let fuelNeeded = Number(arg2);
                if(cars[car].fuel - fuelNeeded >= 0) {
                    cars[car].fuel -= fuelNeeded;
                    cars[car].mileage += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                } else {
                    console.log("Not enough fuel to make that ride");
                }

                if(cars[car].mileage > 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
                break;
        
            case 'Refuel':
                let refueledFuel = Number(arg1);
                cars[car].fuel += refueledFuel;
                if(cars[car].fuel > 75) {
                    let diff = cars[car].fuel - 75;
                    refueledFuel = refueledFuel - diff;
                    cars[car].fuel = 75;
                }
                console.log(`${car} refueled with ${refueledFuel} liters`);
                break;
            case 'Revert':
                let mileageToBeDecreased = Number(arg1);
                cars[car].mileage -= mileageToBeDecreased;
                console.log(`${car} mileage decreased by ${mileageToBeDecreased} kilometers`);
                if(cars[car].mileage < 10000) {
                    cars[car].mileage = 10000
                }
                break;
        }
        line = input.shift();
    }
    for (const car in cars) {
       console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }

}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])