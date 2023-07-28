function seekAndDestroy(string) {
  let half1 = string.substring(0, (string.length + 1) / 2).split('');
  let half2 = string.substring((string.length + 1) / 2).split('');

  for (let index = 0; index < half1.length / 2; index++) {
    let buff1 = half1[index];
    let buff2 = half2[index];

    half1[index] = half1[half1.length - 1 - index];
    half2[index] = half2[half2.length - 1 - index];

    half1[half1.length - 1 - index] = buff1;
    half2[half2.length - 1 - index] = buff2;
  }
  console.log(half1.join(''));
  console.log(half2.join(''));
}
seekAndDestroy('tluciffiDsIsihTgnizamAoSsIsihT');
