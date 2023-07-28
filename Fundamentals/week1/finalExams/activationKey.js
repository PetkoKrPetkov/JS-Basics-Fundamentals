function activationKey(input) {

    let key = input.shift();
    let line = input.shift();

    while(line !== "Generate") {
        let [command, ...args] =  line.split('>>>');
        switch (command) {
            case 'Contains':
                let [substr, ] = args;
                if(key.includes(substr)) {
                    console.log(`${key} contains ${substr}`);
                } else {
                    console.log('Substring not found!');
                }   
                break;
            case 'Flip':
                let [caseUpperOrLower, start, end] = args;
                let substring = key.substring(+start, +end);
                let modifiedText = '';
                if(caseUpperOrLower === 'Upper') {
                    modifiedText = substring.toUpperCase();
                } else if(caseUpperOrLower === 'Lower') {
                    modifiedText = substring.toLowerCase();
                }
                key = key.replace(substring, modifiedText);
                console.log(key);
                break;
            case 'Slice':
                let [startI, endI] = args;
                key = key.substring(0, +startI) + key.substring(+endI);
                console.log(key);             
                break;
        }
        line = input.shift();
    }
    console.log(`Your activation key is: ${key}`);

}
activationKey(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
