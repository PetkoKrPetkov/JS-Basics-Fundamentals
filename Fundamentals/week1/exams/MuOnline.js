function MuOnline(input) {

    let arr = input.split("|");
    let health = 100;
    let round = 0;
    let bitcoins = 0;
    let killed = false;
    let heal = 0;

    for(let i = 0; i < arr.length; i++) {
        
        let currentRoom = arr[i].split(" ");
        let command = currentRoom[0];
        let num = Number(currentRoom[1]);
        round++;

        if(command === "potion") {
            health += num;
            
            if(health <= 100) {
                heal = num; 
            } else {
                heal = health - num - 100;
                health = 100;
            }
            console.log(`You healed for ${Math.abs(heal)} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if(command === "chest") {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            let monsterName = command;
            health -= num;
            if(health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                killed = true;
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${round}`);
                
                break;
            }
        }
        
    }

    if(round >= arr.length && killed === false) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }


}
MuOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");