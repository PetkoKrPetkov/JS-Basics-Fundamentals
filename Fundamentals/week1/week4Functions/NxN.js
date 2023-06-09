function NxN(n) {

    function rowGenerator() {
        let row = "";
        for(let i = 1; i <= n; i++) {
            row += `${n} `;
        }
        return row;
    }

    for(let i = 1; i <= n; i++) {
        console.log(rowGenerator());
    }
}
NxN(8);