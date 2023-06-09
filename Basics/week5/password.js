function password(arr) {
    let username = arr[0];
    let password = arr[1];
    let data = arr[2];

    let index = 3;

    while (data !== password) {
        data = arr[index];
        index++;
    }
    console.log(`Welcome ${username}!`);


}
password(["Gosho",
"secret",
"secret"])

