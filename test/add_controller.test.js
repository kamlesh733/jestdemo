const AddController = require('../controller/add_controller.js');
const AddService = require('../service/add_service.js');

describe('addController()', () => {
  test('if valid num array, then it should pass same to addService', () => {
    // prepare input
    const nums = [1, 2, 3];
    const params = { nums: nums };

    AddService.add = jest.fn();
    // call the actual function
    const received = AddController.add(params);

    // compare the actual response with expected Response
    expect(AddService.add).toBeCalledWith(nums);
  });

  test('if valid mixed array, then it should convert to number and pass to addService', () => {
    // prepare input
    const nums = [1, '19', 3];
    const params = { nums: nums };

    const returnValue = 23;
    AddService.add = jest.fn(() => returnValue);

    // call the actual function
    const received = AddController.add(params);

    // compare the actual response with expected Response
    expect(AddService.add).toBeCalledWith([1, 19, 3]);
    expect(received).toBe(returnValue);
  });


  test('if null value in input, then it should throw error', () => {
    // prepare input
    const params = { nums: [1, null, 3] };
    AddService.add = jest.fn();

    // call the actual function
    try {
      const actualResponse = AddController.add(params);
    } catch (error) {
      // compare the actual response with expected Response
      expect(error.message).toBe("REST_ERROR_INVALID_INPUT")
    }

    expect(AddService.add).not.toBeCalled();
  });

  test('if service throws error, then it should pass on the same error', () => {
    // prepare input
    const params = { nums: [1, 2, 3] };

    // mocked
    AddService.add = jest.fn(() => {
      throw new Error("invalid value in array")
    });

    // call the actual function
    try {
      const actualResponse = AddController.add(params);
    } catch (error) {
      expect(error.message).toBe("invalid value in array")
    }

  });
});
