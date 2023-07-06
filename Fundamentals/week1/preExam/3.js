function deckOfCards(input) {
    let list = input.shift().split(', ');
    let nCommands = Number(input.shift());
  
    for(let i = 0; i < nCommands; i++) {
      let currLine = input.shift().split(', ');
      let command = currLine[0];
  
      if(command === "Add") {
          let cardName = currLine[1];
          if(!list.includes(cardName)) {
              list.push(cardName);
              console.log("Card successfully added");
          } else {
              console.log("Card is already in the deck");
          }
      } else if(command === "Remove") {
          let cardName = currLine[1];
          if(list.includes(cardName)) {
              let index = list.indexOf(cardName);
              list.splice(index, 1);
              console.log("Card successfully removed");
          } else {
              console.log('"Card not found"');
          }
      } else if(command === "Remove At") {
          let index = Number(currLine[1]);
          if(index >= 0 && index < list.length) {
              list.splice(index, 1);
              console.log("Card successfully removed");
          } else {
              console.log("Index out of range");
          }
      } else if(command === "Insert") {
          let index = Number(currLine[1]);
          let insertedCardName = currLine[2];
  
          if(index >= 0 && index < list.length) {
              if(list.includes(insertedCardName)) {
                  console.log("Card is already added");
              } else {
                  list.splice(index, 0, insertedCardName);
                  console.log("Card successfully added");
              }
          } else {
              console.log("Index out of range");
          }
      }
    }
  
    console.log(list.join(", "));
    
  }



deckOfCards([
  'Jack of Spades, Ace of Clubs, Jack of Clubs',
  '2',
  'Insert, -1, Queen of Spades',
  'Remove At, 1',
]);
