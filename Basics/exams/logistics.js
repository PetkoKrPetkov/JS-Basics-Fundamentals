function logistics(arr) {
    let nLoads = Number(arr[0]);
    let index = 1;
    let loadsKG = 0;
    let busLoads = 0;
    let truckLoads = 0;
    let railLoads = 0;
    let price = 0;

    for(let i = 1; i <= nLoads; i++) {
        let load = Number(arr[index]);
        loadsKG += load;
        if(load <= 3) {
            busLoads += load;
            price += 200 * load;
        } else if(load <= 11) {
            truckLoads += load;
            price += 175 * load;
        } else {
            railLoads += load;
            price += 120 * load;
        }
        index++;
    }
    let totalLoads = busLoads + truckLoads + railLoads;
    let avgPrice = price / totalLoads;

    console.log(`${avgPrice.toFixed(2)}`);
    console.log(`${(busLoads / totalLoads * 100).toFixed(2)}%`);
    console.log(`${(truckLoads / totalLoads * 100).toFixed(2)}%`);
    console.log(`${(railLoads / totalLoads * 100).toFixed(2)}%`);
    

}
logistics(["4","1","5","16","3"]);