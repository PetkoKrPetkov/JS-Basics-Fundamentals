function triangleOfNumbers(n) {

    

    for(let rows = 1; rows <= n; rows++) {
        let result = "";
        for(let cols = 1; cols <= rows; cols++) {
            result += `${rows} `;
        }
        console.log(result);

    }
}
triangleOfNumbers(5)