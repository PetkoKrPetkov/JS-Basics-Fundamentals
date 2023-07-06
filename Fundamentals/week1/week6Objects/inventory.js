function inventoryFunc(input) {

    let heroesList = [];

    for (const line of input) {
        let [name, level, items] = line.split(" / ");

        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        }

        heroesList.push(currentHero);

    }
    
    heroesList.sort((a,b)=> a.level - b.level);

    for (const hero of heroesList) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
        
    }


}
inventoryFunc([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )