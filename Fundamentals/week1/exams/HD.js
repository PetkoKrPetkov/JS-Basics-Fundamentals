function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
   
    let currentLine = input.shift();
   
    let currentIndexHouse = 0;
    let counter = 0; // вместо filter
   
    while (currentLine !== 'Love!') {
      let currArr = currentLine.split(' ');
      let jumpLength = Number(currArr[1]);
   
      currentIndexHouse += jumpLength;
   
      if (currentIndexHouse > neighborhood.length-1) {
        currentIndexHouse = 0;
      }
   
      if (neighborhood[currentIndexHouse] > 0){
        neighborhood[currentIndexHouse] -= 2;
      
        // checking if the new reduced element is <= 0 if true then printing message and adding 1 to the counter for completion
        if(neighborhood[currentIndexHouse] <= 0){
          console.log(`Place ${currentIndexHouse} has Valentine's day.`);
          counter++; //вземаш бройката на всички занулени къщи
        }
      } else{
        console.log(`Place ${currentIndexHouse} already had Valentine's day.`);
      }
   
      currentLine = input.shift();
    }
   
    //let notValetninesHouses = neighborhood.filter((x) => x !== 0); - не работи правилно по някава причина
   
    console.log(`Cupid's last position was ${currentIndexHouse}.`);
   
    // counter === neighborhood.length най-сигурно, че всички елементи са 0
    if (counter === neighborhood.length) {
      console.log('Mission was successful.');
    } else {
      console.log(`Cupid has failed ${neighborhood.length - counter} places.`);
    }
  }
  heartDelivery([
    '2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!',
  ]);