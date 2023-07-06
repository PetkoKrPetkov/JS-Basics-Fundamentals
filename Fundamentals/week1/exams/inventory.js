function inventory(input) {
  let inventoryList = input.shift().split(', ');
  let currentLine = input.shift();

  while (currentLine !== 'Craft!') {
    let currentLineAsArr = currentLine.split(" - ")
    let command = currentLineAsArr[0];
    let currentMaterial = currentLineAsArr[1];

    if (command === 'Collect' && !inventoryList.includes(currentMaterial)) {
      inventoryList.push(currentMaterial);
    }

    if (command === 'Drop' && inventoryList.includes(currentMaterial)) {
      let index = inventoryList.indexOf(currentMaterial);
      inventoryList.splice(index, 1);
    }

    if (command === 'Combine Items') {
      let materials = currentMaterial.split(':');
      let itemToBeReplaced = materials.shift();
      let replacingItem = materials.shift();

      if (inventoryList.includes(itemToBeReplaced)) {
        let i = inventoryList.indexOf(itemToBeReplaced);

        inventoryList.splice(i + 1, 0, replacingItem);
      }
    }

    if(command === "Renew" && inventoryList.includes(currentMaterial)) {
        let j = inventoryList.indexOf(currentMaterial);
        inventoryList.splice(j, 1);
        inventoryList.push(currentMaterial);
    }

    currentLine = input.shift();
  }

  console.log(inventoryList.join(", "));
}
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  );
