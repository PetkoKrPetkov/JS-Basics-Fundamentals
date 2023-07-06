function storeProvision(arr1, arr2) {

    let localStore = {};

    for (let index = 0; index < arr1.length; index+=2) {
        let product = arr1[index];
        let quantity = arr1[index + 1];

        localStore[product] = Number(quantity);
      
    }

    

    for (let index = 0; index < arr2.length; index+=2) {
        let product = arr2[index];
        let quantity = arr2[index + 1];

        if(!localStore.hasOwnProperty(product)) {
            localStore[product] = 0;
        }
        localStore[product] += Number(quantity);
        
    }

    for (const key in localStore) {
        console.log(`${key} -> ${localStore[key]}`);
    }

    



}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    )