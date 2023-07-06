function party(input) {
    let vipList = [];
    let regularList = [];

    let command = input.shift();

    while(command !== "PARTY") {
        let firstChar = command[0];

        if(isNaN(firstChar)) {
            regularList.push(command);
        } else {
            vipList.push(command);
        }

        command = input.shift();
    }

    let allGuestsArr = vipList.concat(regularList);

    for (const guest of input) {
        if(allGuestsArr.includes(guest)) {
            allGuestsArr.splice(allGuestsArr.indexOf(guest), 1);
        }
        
    }

    console.log(allGuestsArr.length);
    allGuestsArr.forEach(guest => console.log(guest));

}
party(['7IK9Yo0h',
'9NoBUajQ','Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])