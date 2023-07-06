function friendListMaintence(input) {
  let frindListArr = input.shift().split(', ');
  let blackListedArr = [];
  let lostArr = [];

  let currentLine = input.shift();

  while (currentLine !== 'Report') {
    currentLine = currentLine.split(' ');

    let command = currentLine[0];

    if (command === 'Blacklist') {
      let name = currentLine[1];
      if (frindListArr.includes(name)) {
        blackListedArr.push(name);
        let i = frindListArr.indexOf(name);
        frindListArr[i] = 'Blacklisted';
        console.log(`${name} was blacklisted.`);
      } else {
        console.log(`${name} was not found.`);
      }
    } else if (command === "Error") {
        let index = Number(currentLine[1]);
        if(index >= 0 && index < frindListArr.length) {
            let name = frindListArr[index];
            if(!blackListedArr.includes(name) && !lostArr.includes(name) && name !== "Blacklisted" && name !== "Lost") {
                lostArr.push(name);
                frindListArr[index] = "Lost";
                console.log(`${name} was lost due to an error.`);
            }
        }
    } else if (command === "Change") {
        let index = currentLine[1];
        let newName = currentLine[2];

        if(index >= 0 && index < frindListArr.length) {
            let oldName = frindListArr[index];
            frindListArr.splice(index, 1, newName);
            console.log(`${oldName} changed his username to ${newName}.`);
        }
    }

    currentLine = input.shift();
  }

  let blackListedNum = blackListedArr.length;
  let lostNum = lostArr.length


  console.log(`Blacklisted names: ${blackListedNum}`);
  console.log(`Lost names: ${lostNum}`);
  console.log(frindListArr.join(" "));
}
friendListMaintence([
  'Mike, John, Eddie',

  'Blacklist Mike',

  'Error 0',

  'Report',
]);
