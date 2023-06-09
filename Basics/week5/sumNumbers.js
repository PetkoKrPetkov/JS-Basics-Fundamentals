function sumNumbers(arr) {
   let index = 0;
   let initialNumber = arr[index];
   index++;
   let total = 0;

   while(total < initialNumber) {
    total += Number(arr[index]);
    index++;
   }

   console.log(total);

}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

