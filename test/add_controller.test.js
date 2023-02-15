const AddController = require('../controller/add_controller.js');
const AddService = require('../service/add_service.js');

describe('addController()', () => {
  test('if valid num array, then it should return the sum', () => {
    // prepare input
    const nums = [1, 2, 3];
    const params = { nums: nums };

    AddService.add = jest.fn();
    // call the actual function
    const received = AddController.add(params);

    // compare the actual response with expected Response
    expect(received).toBeTruthy();
  });

  test('if valid mixed array, then it should return the sum', () => {
    // prepare input
    const nums = [1, '19', 3];
    const params = { nums: nums };
    AddService.add = jest.fn(() => 23);

    // call the actual function
    const received = AddController.add(params);

    // compare the actual response with expected Response
    expect(AddService.add).toBeCalledWith([1, 19, 3]);

  });


  test('if null value in input, then it should return 400', () => {
    // prepare input
    const nums = [1, null, 3];
    const params = { nums: nums };
    AddService.add = jest.fn();

    // call the actual function
    expect(() => {
      AddController.add(params);
    }).toThrow("REST_ERROR_INVALID_INPUT")

    // compare the actual response with expected Response
    expect(AddService.add).not.toBeCalled();
  });

  test('if service throws error, then it should handle and return 500', () => {
    // prepare input
    const inputArray = [1, 2, 3];

    // mocked
    AddService.add = jest.fn(() => {
      throw new Error()
    });

    // call the actual function
    const actualResponse = AddController.add(inputArray);

    // compare the actual response with expected Response
    const expectedResponse = { statusCode: 500 };
    expect(actualResponse).toMatchObject(expectedResponse);
  });
});
