function employees(input) {

    let emplList = {};

    for (const employe of input) {
        emplList[employe] = employe.length;
    }


    for (const name in emplList) {
      console.log(`Name: ${name} -- Personal Number: ${Number(emplList[name])}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])