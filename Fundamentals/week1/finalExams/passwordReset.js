function passwordReset(input) {

    let password = input.shift();

    let line = input.shift();

    while (line !== "Done") {
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case "TakeOdd":
                let result = '';
                for (let i = 0; i < password.length; i++) {
                    if(i % 2 === 1) {
                        result += password[i]
                    }     
                }
                password = result;  
                console.log(password);
                break;
            case "Cut":
                let index = Number(arg1);
                let length = Number(arg2);
               
                let toBeRemoved = password.substring(index, index + length);
                let firstOcc = password.indexOf(toBeRemoved);
                password = password.substring(0, firstOcc) + password.substring(firstOcc + length);
                console.log(password);
                break;
            case "Substitute":
                let givenSubstring = arg1;
                let substitude = arg2;
                let regEx = new RegExp(givenSubstring, 'g');
                if(password.includes(givenSubstring)) {
                    password = password.replace(regEx, substitude);
                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }
                
                break;
        
           
        }
        line = input.shift();
    }
    console.log(`Your password is: ${password}`);

}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
