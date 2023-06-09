function condenceArrToNums(nums) {
  let result = 0;

  if (nums.length == 1) {
    result = Number(nums[0]);
    console.log(result);
  }

  while (nums.length > 1) {
    let cond = [];

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums.length === 2) {
        result = Number(nums[0]) + Number(nums[1]);
        console.log(result);
        break;
      }

      let nextI = nums[i + 1];
      cond[i] = nums[i] + nextI;
    }
    nums = cond;
  }
}
condenceArrToNums([1]);
