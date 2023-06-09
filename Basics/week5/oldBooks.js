function oldBooks(arr) {
    let index = 0;

    let searchedBook = arr[index];
    index++;

    let command = arr[index];
    index++;

    let booksCounter = 0;

    while(command !== "No More Books") {
        if(command === searchedBook) {
            console.log(`You checked ${booksCounter} books and found it.`)
            break;
        }
        booksCounter++;
        command = arr[index];
        index++;
    }
    
    if(command === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksCounter} books.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
