function readText(arr) {
    let index = 0;
    let str = arr[index];
    index++;

    while(str !== "Stop") {
        console.log(str);
        str = arr[index];
        index++;
    }

}
readText([
"Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
