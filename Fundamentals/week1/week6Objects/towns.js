function towns(input) {

    

    for (const line of input) {
        let[townName, latitude, longitude] = line.split(" | ");
        let currentTown = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };

        console.log(currentTown);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)