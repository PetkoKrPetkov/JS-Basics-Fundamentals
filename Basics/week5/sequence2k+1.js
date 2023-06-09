function sequence2k(arr) {
   let n = Number(arr[0]);
   let k = 1;

   while(k <= n) {
    console.log(k);
    k = k * 2 + 1;
   }
}
sequence2k(["31"]);
