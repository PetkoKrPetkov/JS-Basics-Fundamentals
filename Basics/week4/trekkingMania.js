function trekkingMania(arr) {
    let groupsCount = Number(arr[0]);
    let musalaClimbers = 0;
    let monblanClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;

    
    for( let i = 1; i <= groupsCount; i++) {
        let memnbersOfGroup = arr[i];
        if(memnbersOfGroup <= 5) {
            musalaClimbers += Number(arr[i]);
        } else if(memnbersOfGroup <=12) {
            monblanClimbers += Number(arr[i]);
        } else if(memnbersOfGroup <=25) {
            kilimanjaroClimbers += Number(arr[i]);
        } else if(memnbersOfGroup <=40) {
            k2Climbers += Number(arr[i]);
        } else {
            everestClimbers += Number(arr[i]);
        }
    }

    let totalNumberOfClimbers = musalaClimbers + monblanClimbers + kilimanjaroClimbers 
                                + k2Climbers + everestClimbers;
    let percantageMusala = musalaClimbers / totalNumberOfClimbers * 100;
    let percantageMonblan = monblanClimbers / totalNumberOfClimbers * 100;
    let percantageKilimanjaro = kilimanjaroClimbers / totalNumberOfClimbers * 100;
    let percantageK2 = k2Climbers / totalNumberOfClimbers * 100;
    let percantageEverest = everestClimbers / totalNumberOfClimbers * 100;

    console.log(`${percantageMusala.toFixed(2)}%`);
    console.log(`${percantageMonblan.toFixed(2)}%`);
    console.log(`${percantageKilimanjaro.toFixed(2)}%`);
    console.log(`${percantageK2.toFixed(2)}%`);
    console.log(`${percantageEverest.toFixed(2)}%`);

}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
