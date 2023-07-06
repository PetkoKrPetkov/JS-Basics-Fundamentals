function oddOccurrences(input) {

    let newObj = {};

    let wordsAsArr = input.split(' ');

    for (let i = 0; i < wordsAsArr.length; i++) {
        let currentWord = wordsAsArr[i].toLowerCase();

        if(!newObj.hasOwnProperty(currentWord)) {
            newObj[currentWord] = 0;
        }
        newObj[currentWord] += 1;
    }

    let ObjAsArr = Object.entries(newObj).filter(double => double[1] % 2 !==0).sort((a,b)=> b[1]-a[1]);

    let result = '';

    for (const arr of ObjAsArr) {
        result += `${arr[0]} `
        
    }

    console.log(result);


}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')