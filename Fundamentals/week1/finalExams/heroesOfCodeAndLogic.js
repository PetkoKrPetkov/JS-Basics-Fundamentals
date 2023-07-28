function heroesOfCodeAndLogic(input) {
  let numOfHeroes = Number(input.shift());
  let heroes = {};
  for (let i = 0; i < numOfHeroes; i++) {
    let [heroName, hp, mana] = input.shift().split(' ');
    heroes[heroName] = {
      hp: Number(hp),
      mana: Number(mana),
    };
  }

  let line = input.shift();
  while (line !== 'End') {
    let [command, name, arg1, arg2] = line.split(' - ');
    switch (command) {
        case 'CastSpell':
            let manaNeeded = Number(arg1);
            let spellName = arg2;
            if (heroes[name].mana >= manaNeeded) {
            heroes[name].mana -= manaNeeded;
            console.log(
            `${name} has successfully cast ${spellName} and now has ${heroes[name].mana} MP!`
            );
            } else {
            console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
            break;
        case 'TakeDamage':
            let damageReceived = Number(arg1);
            let attacker = arg2;
            heroes[name].hp -= damageReceived;
            if(heroes[name].hp > 0) {
                console.log(`${name} was hit for ${damageReceived} HP by ${attacker} and now has ${heroes[name].hp} HP left!`);
            } else {
                delete heroes[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }
            break;
        case 'Recharge':
            let amountOfManaRecharge = Number(arg1);
            heroes[name].mana += amountOfManaRecharge;
            let amountOfRealManaRecharged = amountOfManaRecharge ;
            if(heroes[name].mana > 200) {
                let difference = heroes[name].mana - 200;
                amountOfRealManaRecharged = amountOfManaRecharge - difference;
                heroes[name].mana = 200;  
            }
            console.log(`${name} recharged for ${amountOfRealManaRecharged} MP!`);
            break;
        case 'Heal':
            let amountOhHeal = Number(arg1);
            heroes[name].hp += amountOhHeal;
            let amountOfRealHeal = amountOhHeal;
            if(heroes[name].hp > 100) {
                let difference = heroes[name].hp - 100;
                amountOfRealHeal = amountOhHeal - difference;
                heroes[name].hp = 100;  
            }
            console.log(`${name} healed for ${amountOfRealHeal} HP!`);
            break;    
    }
    line = input.shift();
  }
  for (const heroName in heroes) {
    console.log(heroName);
    console.log(`  HP: ${heroes[heroName].hp}`);
    console.log(`  MP: ${heroes[heroName].mana}`);
  }
}
heroesOfCodeAndLogic([
  '2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End',
]);
