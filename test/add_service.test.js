const AddService = require('../service/add_service.js');

describe('valid input', () => {
  test('if valid num array, then it should return the sum', () => {
    // prepare input
    const inputArray = [1, 2, 3];

    // call the actual function
    const actualResponse = AddService.add(inputArray);

    // compare the actual response with expected Response
    const expectedResponse = 6;
    expect(actualResponse).toBe(expectedResponse);
  });
});

describe('invalid input', () => {
  test('if invalid type in array, then it should throw error', () => {
    // prepare input
    const inputArray = ['1', '2', 3];

    console.log = jest.fn();
    const received = () => {
      AddService.add(inputArray)
    };
    // call the actual function
    expect(received).toThrow("invalid value in array");
  });

  test('if undefined/null type in array, then it should throw error', () => {
    // prepare input
    const inputArray = [null, undefined, 3];

    console.log = jest.fn();
    const received = () => {
      AddService.add(inputArray)
    };
    // call the actual function
    expect(received).toThrow("invalid value in array");
  });

});
