class AddService {

  add(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] !== "number") {
        throw new Error("invalid value in array");
      }
      sum += nums[i];
    }
    return sum;
  }

}

module.exports = new AddService();
