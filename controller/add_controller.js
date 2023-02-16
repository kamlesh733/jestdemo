const AddService = require('../service/add_service.js');

class AddController {

  add(params) {
    const { nums } = params;

    this._validateAndConvertToNumber(nums);

    const result = AddService.add(nums);

    return result;
  }

  _validateAndConvertToNumber(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (isNaN(nums[i]) || typeof nums[i] !== "number") {
        throw new Error("REST_ERROR_INVALID_INPUT")
      }
    }
  }
}

module.exports = new AddController();

